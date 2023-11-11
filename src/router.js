import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { profileLoad, userLoad } from "./loader";
import Firsttime from "./pages/Firsttime";
import { activateProfile } from "./action";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="/test" element={<Test></Test>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/home" element={<Home></Home>} loader={userLoad}></Route>
            <Route path="/firsttime" element={<Firsttime></Firsttime>} loader={userLoad}></Route>
            <Route path="/activate" action={activateProfile}></Route>
            <Route path="/profiles/:id" element={<Profile></Profile>} loader={profileLoad}></Route>
            <Route path="/editprofile" element={<Editprofile></Editprofile>} loader={userLoad}></Route>
        </Route>
    )
)

export default router;