import { Route, Routes } from "react-router-dom";
import App from "../containers/App";
import StartPage from "../containers/StartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<StartPage />} />
      </Route>
    </Routes>
  )
}

export default Router;