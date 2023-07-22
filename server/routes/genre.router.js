const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get("/details/:id", (req, res) => {
  // const queryText = "SELECT * FROM genres WHERE id=$1";
  const queryText = 
  `
  SELECT genres.name FROM movies 
  JOIN movies_genres ON movies.id = movies_genres.movie_id 
  JOIN  genres ON genres.id = movies_genres.genre_id
  WHERE movies.id = 1;
  `;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT genres query", err);
      res.sendStatus(500);
    });
});

module.exports = router;


// router.get('/', (req, res) => {
//   // Add query to get all genres
//   const queryText = "SELECT * FROM movies JOIN movies_genres ON movie.id = movies_genres.movie_id JOIN  genres ON genres.id = movies_genres.genre_id;";
//   // const queryText = `SELECT * FROM generes ORDER BY "id"`;
//   pool
//      .query(queryText)
//      .then((result) => {
//        res.send(result.rows);
//      })
//      .catch((err) => {
//       console.log("Error completing SELECT genre query", err);
//       res.sendStatus(500)
//     });
//   // res.sendStatus(500)
// });

// SELECT * FROM movie
// JOIN movies_genres ON movie.id = movies_genres.movie_id
// JOIN  genres ON genres.id = movies_genres.genre_id;

// SELECT * FROM genres
// JOIN personHobby ON person.id = PersonHobby.person_id
// JOIN  Hobby ON Hobby.id = personHobby.hobby_id;

// SELECT * FROM Person
// JOIN personHobby ON person.id = PersonHobby.person_id
// JOIN  Hobby ON Hobby.id = personHobby.hobby_id;