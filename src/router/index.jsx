import { Route, Routes } from "react-router-dom";
import App from "../containers/App";
import UsersPage from "../containers/UsersPage";
import StartPage from "../containers/StartPage";
import UserPage from "../containers/UserPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<StartPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserPage />} />
      </Route>
    </Routes>
  )
}

export default Router;