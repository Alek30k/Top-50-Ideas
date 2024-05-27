const Tabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered ">
      <a role="tab" className="tab text-lg font-bold">
        🔥 Hot
      </a>
      <a role="tab" className="tab text-lg font-bold tab-active">
        ✨ New
      </a>
      <a role="tab" className="tab text-lg font-bold">
        🏆 Top
      </a>
    </div>
  );
};

export default Tabs;
