const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const DEEZER_API_URL = "https://api.deezer.com/search";
const TMDB_API_URL = "https://api.themoviedb.org/3/search/movie";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

// 🎵 Music Search Endpoint
app.get("/api/music", async (req, res) => {
    const searchQuery = req.query.q;

    if (!searchQuery) {
        return res.status(400).json({ error: "Please provide a search query." });
    }

    try {
        const response = await axios.get(DEEZER_API_URL, { params: { q: searchQuery } });

        const musicResults = response.data.data.map(track => ({
            title: track.title,
            artist: track.artist.name,
            album: track.album.title,
            duration: `${Math.floor(track.duration / 60)}m ${track.duration % 60}s`,
            preview: track.preview,
            cover: track.album.cover_medium
        }));

        res.json({ results: musicResults });
    } catch (error) {
        console.error("Music API error:", error);
        res.status(500).json({ error: "Failed to fetch music data." });
    }
});

// 🎬 Movie Search Endpoint
app.get("/api/movie", async (req, res) => {
    const searchQuery = req.query.q;

    if (!searchQuery) {
        return res.status(400).json({ error: "Please provide a search query." });
    }

    try {
        const response = await axios.get(TMDB_API_URL, {
            params: { query: searchQuery, api_key: TMDB_API_KEY },
            headers: { Authorization: `Bearer ${TMDB_ACCESS_TOKEN}` }
        });

        const movieResults = response.data.results.map(movie => ({
            title: movie.title,
            year: movie.release_date ? movie.release_date.split("-")[0] : "Unknown",
            rating: movie.vote_average,
            overview: movie.overview,
            poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "No Poster Available"
        }));

        res.json({ results: movieResults });
    } catch (error) {
        console.error("Movie API error:", error);
        res.status(500).json({ error: "Failed to fetch movie data." });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Music & Movie API running at http://localhost:${PORT}`))
