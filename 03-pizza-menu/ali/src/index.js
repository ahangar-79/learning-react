import React from "react"; //final
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzasData = [
  {
    name: "Focaccia",
    sideDishes: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    sideDishes: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    sideDishes: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    sideDishes: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    sideDishes: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    sideDishes: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "25", textTransform: "uppercase" };
  return (
    <header className="header">
      {/* <h1 style={style}>welcome to Italiano pizza resturant</h1> */}
      <h1>welcome to Italiano pizza resturant</h1>
    </header>
  );
}

function Menu() {
  const pizzasList = pizzasData;
  // const pizzasList = [];
  const nothing = pizzasList.length;

  return (
    <main className="menu">
      <h2>our menu</h2>

      {nothing > 0 ? (
        <React.Fragment>
          <p>
            enjoy from organic italian pizzas Italiano resturant and please at
            the end before leave show your opinion about that
          </p>
          <ul className="pizzas">
            {pizzasList.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p> We're still working on our menu, please come back later</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        sideDishes="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={110}
      />

      <Pizza
        name="Pizza Funghi"
        sideDishes="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={213}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.sideDishes}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.soldOut}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  console.log(isOpen);
  // if (hour >= Open && hour <= Close) alert("we're currently open");
  // else alert("sorry we're close");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={close} open={open} />
      ) : (
        <p>
          We're happy to welcone you between {open} and {close}
        </p>
      )}
    </footer>
  );
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        We'er open from {open} until {close}:00. Come visit us or please order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
