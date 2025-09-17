import * as tutorials from "../controllers/tutorial.controller.js";
import express from "express";

export default (app) => {
	let router = express.Router();

	router.post("/", tutorials.create);

	router.get("/", tutorials.findAll);

	router.get("/:id", tutorials.findOne);

	router.put("/:id", tutorials.update);

	router.delete("/:id", tutorials.deleteOne)

	router.delete("/", tutorials.deleteAll);

	router.get("/published", tutorials.findAllPublished);

	app.use("/api/tutorials", router);
};