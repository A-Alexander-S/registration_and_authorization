import { Route, Routes } from "react-router-dom";
import App from "../containers/App";
import UsersPage from "../containers/UsersPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default Router;