import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TodoListPage from "../pages/TodoListPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/todo_list", element: <TodoListPage /> },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
