import Router from "./routes/Router";
import "./index.css";
import AuthContext from "./context/AuthContext";
import PostContext from "./context/PostContext";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    // <AuthContext>
    //   <PostContext>
    //     <Router />
    //   </PostContext>
    // </AuthContext>
    // <LoginPage />
    <TodoListPage />
  );
}

export default App;
