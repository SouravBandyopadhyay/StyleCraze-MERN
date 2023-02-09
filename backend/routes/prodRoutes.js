import express from "express";
import * as prodController from "../controllers/prodController.js";

const router = express.Router();
router.post("/register", prodController.registerProduct);
router.get("/getprod",prodController.fetchallData)
router.get("/getprod/:_id",prodController.fetchdatabyID)

export default router;
