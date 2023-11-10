import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="/test" element={<Test></Test>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
        </Route>
    )
)

export default router;