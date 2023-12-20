import React, { useState } from "react";
import "./displayComments.css";
const AddCommentForm = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (commentText.trim() !== "") {
      onAddComment(commentText);
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formAddComment">
      <label className="labelAndText">Add Comment:</label>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add Comment here"
        className="proHeight"
      />

      <button type="submit" className="submit-comment">
        Submit
      </button>
    </form>
  );
};

export default AddCommentForm;
