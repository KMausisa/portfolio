import { Link } from "react-router-dom";

/**
 * @returns Navbar component that provides navigation links home, experience, and projects.
 */
const Navbar = () => {
  return (
    <nav className="navbar bg-white text-black p-4 text-lg shadow-md">
      <ul className="navbar-list flex space-x-12 justify-center">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
