import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://3.6.39.101:9800";

export default function PostItem(props) {
  const router = useNavigate();
  console.log(props.post);
  //======================
  const detelePost = async () => {
    const response = await fetch(`${BASE_URL}/post/delete/${props.post.id}`, {
      method: "DELETE",
      headers: {
        authorization: sessionStorage.getItem("token"),
        "Content-type": "application/json",
      },
    });
    alert("Post deleted");
  };
  async function deleteP() {
    props.remove(props.post);
    detelePost();
  }

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__image">
          <img src={props.post.photo} alt={"post-photo"} />
        </div>
        <div className="post__body">
          <div className="post__info">
            <h2 className="post__title">{props.post.title}</h2>
            <div className="post__text">{props.post.content}</div>
          </div>
          <div className="post__buttons">
            <MyButton
              onClick={() => router(`/posts/${props.post.id}`)}
              className="post__button"
            >
              Open
            </MyButton>
            <MyButton onClick={deleteP} className="post__button">
              Delete
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
