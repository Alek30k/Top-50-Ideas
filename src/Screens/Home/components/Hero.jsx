import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);

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
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select Theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>retro</option>
          <option>acid</option>
          <option>lemonade</option>
          <option>sunset</option>
          <option>winter</option>
          <option>lofi</option>
          <option>valentine</option>
          <option>halloween</option>
          <option>garden</option>
          <option>forest</option>
          <option>aqua</option>
          <option>pastel</option>
          <option>fantasy</option>
          <option>wireframe</option>
          <option>luxury</option>
          <option>dracula</option>
          <option>cmyk</option>
          <option>autumn</option>
          <option>business</option>
          <option>night</option>
          <option>coffee</option>
          <option>dim</option>
          <option>nord</option>
          <option>cyberpunk</option>
          <option>synthwave</option>
          <option>emerald</option>
          <option>dracula</option>
          <option>dracula</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
