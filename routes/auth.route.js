import express from "express";
import { signup,signin, googleAuth } from "../controller/auth.controller.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/googleAuth",googleAuth);

export default router;
