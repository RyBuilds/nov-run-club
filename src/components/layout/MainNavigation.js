import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img
            className={classes.logo}
            src="https://static.wixstatic.com/media/d97013_658b49c0619c479891ed1daaa0d74907~mv2.png/v1/crop/x_30,y_235,w_633,h_273/fill/w_334,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20.png"
            alt="Nov Run Club Logo"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
