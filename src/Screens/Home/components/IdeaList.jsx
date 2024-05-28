import IdeaItem from "./IdeaItem";

const IdeaList = ({ ideaList }) => {
  return (
    <div className="">
      {ideaList.map((idea, index) => (
        <IdeaItem idea={idea} key={index} index={index} />
      ))}
    </div>
  );
};

export default IdeaList;
