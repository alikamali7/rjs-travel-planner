import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
