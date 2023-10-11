import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NoMatch from "./NoMatch";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/login" element={<Login />} />
      <Route path="user/signup" element={<Signup />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Routing;
