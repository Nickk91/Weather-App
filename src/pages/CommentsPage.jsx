import React, { useState, useEffect } from "react";
import DisplayedComments from "../components/CommentComponents/DisplayedComments";
import AddCommentForm from "../components/CommentComponents/AddCommentForm";
import DeleteCommentComponent from "../components/CommentComponents/DeleteCommentComponent";
import "../stylesheets/page-styling.css";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://65814b933dfdd1b11c42e222.mockapi.io/posts`
      );

      const result = await response.json();
      setComments(result);
      console.log("Comments fetched successfully.");
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const addComment = async (commentText) => {
    try {
      const response = await fetch(
        "https://65814b933dfdd1b11c42e222.mockapi.io/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "exampleUser", //to be replaced with dynamic value of logged in user
            commentText: commentText,
          }),
        }
      );
      if (response.ok) {
        fetchComments();
        console.log("Comment added successfully.");
      } else {
        console.error("Error adding comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://65814b933dfdd1b11c42e222.mockapi.io/posts/${commentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchComments();
        console.log("Comment deleted successfully.");
      } else {
        console.error("Error deleting comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section className="page">
      <AddCommentForm onAddComment={addComment} />
      <DeleteCommentComponent onDeleteComment={deleteComment} />
      <DisplayedComments comments={comments} />
    </section>
  );
};

export default CommentsPage;
