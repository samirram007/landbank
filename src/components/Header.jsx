import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">LandBank</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/dashboard" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  export default Header;


