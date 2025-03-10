import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
fulName:'',
nationalID:'',
createAt:'',
} 

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
    return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
    return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":                                           
    if (state.loan > 0) return state;
    return { ...state, 
      loan: action.payload.amount,                                            // loan, loanPurpose, balance
      loanPurpose: action.payload.purpose,
      balance: state.balance + action.payload.amount,
    };
    case "account/payLoan":
    return {
      ...state,
      loan: 0,                                                               // loan, loanPurpose, balance
      loanPurpose: "",
      balance: state.balance - state.loan,
    };
    default:
    return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {...state, 
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };

    default: 
    return state;
  }
}

const rootReducer = combineReducers({
  account:accountReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer);


function deposit(amount) {
  return {type:"account/deposit", payload:amount}
}


function withdraw(amount) {
  return {type:"account/withdraw", payload:amount}
}


function requestLoan(amount , purpose) {
  return {type:"account/requestLoan", payload:{amount, purpose}}             // purpose
}


function payLoan() {
  return {type:"account/payLoan"}
}


store.dispatch({ type: "account/deposit", payload: 500 });
store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState());

store.dispatch({type: "account/requestLoan", payload: {amount:1000, purpose: 'Buy a car'} });
console.log(store.getState());

store.dispatch({type: "account/payLoan"});
console.log(store.getState());


function createCustomer(fullName, nationalID) {
  return {type:"customer/createCustomer", payload:{fullName, nationalID, createAt: new Date().toISOString()}};
}

function updateName(fullName) {
 return {type:"customer/updateName", payload:{fullName}}; 
}

store.dispatch(createCustomer("Jonas Schmedtmann", "126442"))
console.log(store.getState())
store.dispatch(deposit(250))
console.log(store.getState())