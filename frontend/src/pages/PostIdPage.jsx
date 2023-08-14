import React, { useState } from "react";

export default function PostIdPage() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return alert("Please login first");
    }
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };
  const name = sessionStorage.getItem("name");

  return (
    <div className="post-container">
      <div className="comment-box">
        <input
          className="cmt"
          type="text"
          placeholder="Enter your comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button className="comment-button" onClick={handleCommentSubmit}>
          Send
        </button>
      </div>
      <div className="comments-section">
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <span style={{ fontWeight: "600" }}>{name}: </span>
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
