const Navbar = () => {
    return (
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
              <li><a href="/">Home</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a href="/submenu1">Submenu 1</a></li>
                  <li><a href="/submenu2">Submenu 2</a></li>
                </ul>
              </li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">My Blog</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a href="/submenu1">Submenu 1</a></li>
                  <li><a href="/submenu2">Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/contact" className="btn">Contact</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  