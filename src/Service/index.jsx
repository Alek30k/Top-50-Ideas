export const upvote = (id) => {
  if (upvote()) {
    const votes = localStorage.getItem("votes")
      ? JSON.parse(localStorage.getItem("votes"))
      : {
          upvotes: [],
          downvote: [],
        };

    if (votes.upvotes.indexOf(id) !== -1) {
      return false;
    }
    votes.upvotes.push(id);
  }
};
