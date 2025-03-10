import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export const depositAsync = createAsyncThunk(
  "account/depositAsync",
  async ({ amount, currency }) => {
    if (currency === "USD") return amount;

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    return data.rates.USD; 
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    requestLoan: (state, action) => {
      if (state.loan === 0) {
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      }
    },
    payLoan: (state) => {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(depositAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(depositAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance += action.payload;
      });
    },
  });
  
  export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
  export default accountSlice.reducer;



  // const initialStateAccount = {
  //   balance: 0,
  //   loan: 0,
  //   loanPurpose: "",
  //   isLoading: false,
  // };
  
  // export default function accountReducer(state = initialStateAccount, action) {
  //   switch (action.type) {
  //     case "account/deposit":
  //       return {
  //         ...state,
  //         balance: state.balance + action.payload,
  //         isLoading: false,
  //       };
  //     case "account/withdraw":
  //       return { ...state, balance: state.balance - action.payload };
  //     case "account/requestLoan":
  //       if (state.loan > 0) return state;
  //       return {
  //         ...state,
  //         loan: action.payload.amount, // loan, loanPurpose, balance
  //         loanPurpose: action.payload.purpose,
  //         balance: state.balance + action.payload.amount,
  //       };
  //     case "account/payLoan":
  //       return {
  //         ...state,
  //         loan: 0, // loan, loanPurpose, balance
  //         loanPurpose: "",
  //         balance: state.balance - state.loan,
  //       };
  //     case "account/convertingCurrency":
  //       return { ...state, isLoading: true };
  
  //     default:
  //       return state;
  //   }
  // }
  
  // export function deposit(amount, currency) {
  //   if (currency === "USD") return { type: "account/deposit", payload: amount };
  
  //   return async function (dispatch) {
  //     const res = await fetch(
  //       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
  //     );
  //     const data = await res.json();
  //     const converted = data.rates.USD;
  
  //     dispatch({ type: "account/deposit", payload: converted });
  //   };
  // }
  
  // export function withdraw(amount) {
  //   return { type: "account/withdraw", payload: amount };
  // }
  
  // export function requestLoan(amount, purpose) {
  //   return { type: "account/requestLoan", payload: { amount, purpose } }; // purpose
  // }
  
  // export function payLoan() {
  //   return { type: "account/payLoan" };
  // }