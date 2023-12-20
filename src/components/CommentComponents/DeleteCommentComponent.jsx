import React, { useState } from "react";
import "./displayComments.css";

const DeleteCommentComponent = ({ onDeleteComment }) => {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (commentText.trim() !== "") {
      onDeleteComment(commentText);
      setCommentText("");
      setError(null);
    } else {
      setError("Please enter comment text."); // Display an error message
    }
  };

  return (
    <div>
      <form class="delete-form-container" onSubmit={handleSubmit}>
        <label>Comment Text:</label>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Enter comment text"
        ></input>
        <button className="delete-btn" type="submit">
          Delete Comment
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default DeleteCommentComponent;
