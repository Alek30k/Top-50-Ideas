import { ChevronLeft, Info, Send } from "lucide-react";
import Header from "../Home/components/Header";
import { useState } from "react";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";

const AddNewScreen = () => {
  const [idea, setIdea] = useState();
  const [username, setUsername] = useState();

  const onSavehandler = async () => {
    const result = await db.insert(Ideas).values({
      content: idea,
      username: username,
      createdAt,
    });
  };

  return (
    <div className="">
      <Header />

      <button className="btn mt-7">
        <ChevronLeft />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation : Empowering your startup Journey
      </h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea
          onChange={(event) => setIdea(event.target.value)}
          className="textarea textarea-bordered border-primary"
          placeholder="Write your Idea"
        ></textarea>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <label className="flex justify-between">
          Your Username *
          <span className="flex items-center gap-2 text-sm">
            <Info className="h-4 w-4" />
            No Account Needed
          </span>
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          className="input input-bordered w-full border-primary"
        />
      </div>
      <button
        className="btn w-full btn-primary mt-7"
        disabled={!(idea && username)}
        onClick={() => onSavehandler()}
      >
        Send
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AddNewScreen;
