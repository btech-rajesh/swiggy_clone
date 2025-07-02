import mongoose from "mongoose";
import { register,login} from "../controller/user.controller.js";


function userRouterApp(app){
    app.post("/api/register", register);
    app.post("/api/login", login);
}

export default userRouterApp;