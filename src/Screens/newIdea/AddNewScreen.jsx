import { ChevronLeft, Info, Send } from "lucide-react";
import Header from "../Home/components/Header";
import { useState } from "react";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";
import moment from "moment";

const AddNewScreen = () => {
  const [idea, setIdea] = useState();
  const [username, setUsername] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const onSavehandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().format("DD MMM yyyy"),
      })
      .returning({ id: Ideas.id });

    if (result) {
      localStorage.setItem("username", username);
      console.log("Insert data");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <div className="">
      <Header />
      {showAlert && (
        <div role="alert" className="alert alert-success mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      )}
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
