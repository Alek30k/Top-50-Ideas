import { eq } from "drizzle-orm";
import { Ideas } from "../../../../utils/schema";
import { db } from "./../../../../utils/index";

const IdeaItem = ({ idea, index, refreshData }) => {
  const upVoteHandler = async () => {
    const result = await db
      .update(Ideas)
      .set({
        vote: idea.vote + 1,
      })
      .where(eq(Ideas.id, idea.id))
      .returning({ id: Ideas.id });

    if (result) {
      refreshData();
    }
  };

  const dowVote = async () => {
    const result = await db
      .update(Ideas)
      .set({
        vote: idea.vote - 1,
      })
      .where(eq(Ideas.id, idea.id))
      .returning({ id: Ideas.id });

    if (result) {
      refreshData();
    }
  };

  return (
    <div className="my-5 border shadow-lg rounded-lg p-5 ">
      <div className="flex gap-7 justify-between">
        <h2 className="flex gap-2">
          <span>{index + 1}. </span> {idea?.content}
        </h2>
        <div className="flex flex-col items-center">
          <h2
            className="text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2"
            onClick={() => upVoteHandler()}
          >
            🔥
          </h2>
          <h2 className="text-lg rounded-md p-1 font-bold">{idea?.vote}</h2>
          <h2
            className="text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2"
            onClick={() => dowVote()}
          >
            👎
          </h2>
        </div>
      </div>
      <h2 className="mt-4 text-gray-400 text-sm flex gap-6">
        <span> </span>
        By @{idea?.username} on {idea?.createdAt}
      </h2>
    </div>
  );
};

export default IdeaItem;
