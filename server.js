const express = require('express');
const mysql = require('mysql2');

const PORT = 3001;

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
    console.log(`${req.method} request received for /api/movies.`);

    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {console.log(err);}

        res.json(results);
    });
});

// Adding a movie to the db
app.post('/api/movies', (req, res))