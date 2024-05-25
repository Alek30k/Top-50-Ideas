import logo from "./../../../assets/AC.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <button className="btn btn-primary btn-sm md:btn-md">+ New Idea</button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div className="">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          By Alejandro Cabrera
        </h2>
      </div>
    </div>
  );
};

export default Header;
