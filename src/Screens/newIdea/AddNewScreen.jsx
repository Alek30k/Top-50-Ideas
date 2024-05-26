import Header from "../Home/components/Header";

const AddNewScreen = () => {
  return (
    <div className="">
      <Header />

      <button className="btn mt-7">Back</button>
      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation : Empowering your startup Journey
      </h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea
          className="textarea textarea-bordered border-primary"
          placeholder="Bio"
        ></textarea>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <label className="flex justify-between">
          Your Username *
          <span className="flex items-center gap-2 text-sm">
            No Account Needed
          </span>
        </label>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full border-primary"
        />
      </div>
    </div>
  );
};

export default AddNewScreen;
