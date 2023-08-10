import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const BASE_URL = "http://3.6.39.101:9800";
const url = `${BASE_URL}/post/posts`;
export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
    photo: `https://picsum.photos/200/300?random=${Math.random(1, 11)}`,
  });

  async function addNewPost(event) {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    //=============
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    alert("Blog added successfully");
    //===============
    setPost({
      title: "",
      body: "",
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
        onChange={(event) => setPost({ ...post, body: event.target.value })}
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
