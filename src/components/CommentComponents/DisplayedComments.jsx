import React, { useState, useEffect } from "react";
import "./displayComments.css";

const DisplayedComments = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const commentsPerPage = 5;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://65814b933dfdd1b11c42e222.mockapi.io/posts`
        );
        const result = await response.json();
        setComments(result);
        setIsLoading(false);
        console.log("New rendering");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderComments = () => {
    if (currentComments.length === 0) {
      return <p>No comments to display</p>;
    }

    return (
      <>
        <h2>Comments - Page {currentPage}</h2>
        <ul className="commentsSection">
          {currentComments.map((comment, i) => (
            <li
              key={comment.id}
              style={{
                background:
                  i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.6)",
              }}
            >
              <strong>{comment.username}:</strong> {comment.commentText}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="displayed-comments-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          {renderComments()}
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(comments.length / commentsPerPage) },
              (_, i) => (
                <button
                  className="page-btn"
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayedComments;
