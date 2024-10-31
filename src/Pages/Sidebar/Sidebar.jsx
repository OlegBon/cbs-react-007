import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/statehooks">Built-in React Hooks</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
        <h4>Task 2</h4>
        <ul>
          <li>
            <NavLink to="/testpage">Test Page</NavLink>
          </li>
          <li>
            <NavLink to="/testreact">Test React</NavLink>
          </li>
          <li>
            <NavLink to="/testhello">Test Hello</NavLink>
          </li>
        </ul>
        <h4>Task 3</h4>
        <ul>
          <li>
            <NavLink to="/taskusers">Task Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
