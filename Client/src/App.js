import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UseSelector, useSelector } from "react-redux";
import CustomSpinner from "./component/Spinner";

function App() {
  const { loading } = useSelector(state => state.alerts);
  console.log("??????????????????????", loading);
  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <CustomSpinner />
        ) : (
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<SignIn />} />

            <Route path="/register" element={<SignUp />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
