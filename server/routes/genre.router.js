const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = "SELECT * FROM movie JOIN movies_genres ON movie.id = movies_genres.movie_id JOIN  genres ON genres.id = movies_genres.genre_id;";
  pool
     .query(queryText)
     .then((result) => {
       res.send(result.rows);
     })
     .catch((err) => {
      console.log("Error completing SELECT class query", err);
      res.sendStatus(500)
    });
  // res.sendStatus(500)
});

module.exports = router;

// SELECT * FROM movie
// JOIN movies_genres ON movie.id = movies_genres.movie_id
// JOIN  genres ON genres.id = movies_genres.genre_id;

// SELECT * FROM Person
// JOIN personHobby ON person.id = PersonHobby.person_id
// JOIN  Hobby ON Hobby.id = personHobby.hobby_id;