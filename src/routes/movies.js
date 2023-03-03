import { Router } from "express";
import _ from "underscore";
import movies from "../sample.json" assert { type: "json" };

const router = new Router();

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const id = movies.length + 1;
  const { title, director, year, rating } = req.body;

  if (id && title && director && year && rating) {
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (id && title && director && year && rating) {
    _.each(movies, (movie, i) => {
      if (movie.id === id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movies.splice(i, 1);
      }
    });
    res.json(movies);
  }
});

export default router;
