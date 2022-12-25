import { Route, Routes } from "react-router-dom";
import App from "../containers/App";
import UsersPage from "../containers/UsersPage";
import StartPage from "../containers/StartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="start" element={<StartPage />} />
        <Route index element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default Router;