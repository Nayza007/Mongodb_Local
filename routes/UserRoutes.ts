import express from "express";
import { getAll, register, login } from "../controllers/UserController";

const router = express.Router();

router.route("/").get(getAll).post(login);
router.post("/register", register);

export default router;
