import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErroPage from "../pages/ErroPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<HomePage />} />
        <Route path={"/profile/:name"} element={<ProfilePage />} />
        <Route path={"*"} element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
