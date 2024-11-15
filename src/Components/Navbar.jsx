import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Blogs">Contact</NavLink>
              </li>
            </ul>
          </div>
          <img src="/src/assets/favicon.png" alt="" />
          <div className="text-black text-[34px] font-bold font-['Montserrat']"><NavLink to="/Login">Furniro</NavLink></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Shop">Shop</NavLink>
              </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Blogs">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
        <div className="w-7 h-7 relative mx-8">
          <img src="/src/assets/nav-icon.svg" alt="" />
        </div>
        <div className="w-7 h-7 relative mx-8">
          <img src="/src/assets/search.svg" alt="" />
        </div>
        <div className="w-7 h-7 relative mx-8">
          <img src="/src/assets/nav-icon3.svg" alt="" />
        </div>
        <div className="w-7 h-7 relative mx-8">
          <img src="/src/assets/nav-icon4.svg" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
