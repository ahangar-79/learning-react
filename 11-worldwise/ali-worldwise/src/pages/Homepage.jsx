// import { Link } from "react-router-dom";
// import PageNav from "../Components/PageNav";

// function Homepage() {
//   return (
//     <div>
//       <PageNav />
//       <h1 className="test">WorldWise</h1>
//       {/* <a href="/pricing">Pricing</a> */}
//       {/* <Link to="/pricing"> Pricing </Link> */}
//       <Link to="/AppLayout"> Go to AppLayout </Link>
//     </div>
//   );
// }

// export default Homepage;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../Components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
