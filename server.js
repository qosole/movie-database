const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to mysql db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
    },
    console.log('Connected to database!')
);


// Rendering a list of all movies
app.get('/api/movies', (req, res) => {
    console.log(`${req.method} request received for /api/movies`);

    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {console.log(err);}

        res.json(results);
    });
});

// Adding a movie to the db
app.post('/api/add-movie', (req, res) => {
    console.log(`${req.method} request received for /api/add-movie`);

    db.query(`INSERT INTO movies (movie_name) VALUES ("${req.body.movie_name}")`, (err, results) => {
        if (err) {console.log(err);}

        res.json(results);
    });
});

// Updating a review
app.patch('/api/update-review', (req, res) => {
    console.log(`${req.method} request received for /api/update-review`);

    db.query(`UPDATE reviews SET review = "${req.body.review}" WHERE movie_id = ${req.body.movie_id}`, (err, results) => {
        if (err) {console.log(err);}

        res.json(results);
    });
});

//Adding Delete route
app.delete("/api/movie/:id", (req, res) => {
    console.log(`${req.method} request received for /api/movie/:id`);

    db.query(`DELETE FROM movies WHERE movies.id = ${req.params.id}`, (err, results)=> {
        if (err) {console.log(err);}

        console.log("Number of records deleted: " + result.affectedRows);
    });
});

// Default route
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});