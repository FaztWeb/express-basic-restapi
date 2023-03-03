import { Router } from "express";

const router = new Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Fazt",
    website: "faztweb.com",
  };
  res.json(data);
});

export default router;
