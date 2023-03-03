import { Router } from "express";

const router = new Router();

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  res.json(data);
});

export default router;
