import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const BASE_URL = "http://3.6.39.101:9800";
const url = `${BASE_URL}/post/posts`;
export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    photo: `https://picsum.photos/200/300?random=${Math.random(1, 11)}`,
  });

  async function addNewPost(event) {
    event.preventDefault();
    const newPost = { ...post };

    //=============
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify(newPost),
    });
    console.log("entered");
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    alert("Blog added successfully");
    create(newPost);
    //===============
    setPost({
      title: "",
      content: "",
      photo: `https://picsum.photos/200/300?random=${Math.random(1, 11)}`,
    });
  }

  return (
    <form>
      <MyInput
        style={{ marginBottom: "10px" }}
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Title of the post"
      />
      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, content: event.target.value })}
        type="text"
        placeholder="Description of the post"
      />
      <MyButton
        style={{ display: "block", margin: "15px auto 0px auto" }}
        onClick={addNewPost}
      >
        Create
      </MyButton>
    </form>
  );
}
