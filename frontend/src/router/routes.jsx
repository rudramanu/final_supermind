import PostItem from "../components/PostItem";
import Login from "../components/UI/login/login";
import Register from "../components/UI/register/register";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/login", component: <Login />, exact: true },
  { path: "/register", component: <Register />, exact: true },
];
