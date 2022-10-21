import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/page">page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
