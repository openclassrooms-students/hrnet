import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 border-b border-primary w-full flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png"
          width="70"
          height="70"
          className="logo react"
          alt="logo Health Wealth"
        />
        <h1 className="text-xl font-bold">Wealth Health</h1>
      </Link>
      <Link
        to="employees"
        className="text-xl hover:underline underline-offset-4"
      >
        View Current Employees
      </Link>
    </nav>
  );
};

export default Navbar;
