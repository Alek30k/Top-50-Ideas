const Hero = () => {
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 Productive ideas for your next startup
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">Like your favorites ideas. </strong>
        Write your best Ideas. No account needed!
      </h2>
      <div className="">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
