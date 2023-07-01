import {
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello routers!
      <Link to="/users/2">Ты</Link>
    </div>,
  },
  {
    path: "/users/:userId",
    async lazy() {
        const userImport = await import(
          "./User"
        );
        return {
          Component: userImport.User,
        };
    },
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />
}