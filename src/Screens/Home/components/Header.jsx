import { Plus } from "lucide-react";
import logo from "./../../../assets/AC.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg p-4 border rounded-lg">
      <button className="btn btn-primary btn-sm md:btn-md">
        <Plus className="h-6 w-6" /> New Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          By Alejandro Cabrera
        </h2>
      </div>
    </div>
  );
};

export default Header;
