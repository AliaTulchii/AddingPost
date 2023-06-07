import AddPostForm from "features/AddPostForm/AddPostForm";
import PostsList from "features/PostsList/PostsList";

export const App = () => {
  return (
    <main className="App">
      <AddPostForm/>
      <PostsList />
    </main>
  );
};
