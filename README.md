

### **📜 README.md**
```markdown
# 🎵🎬 Music & Movie Search API

A simple **REST API** to fetch music details from Deezer and movie information from TMDb.

## 🚀 Features
✅ Search for songs by title, artist, or album  
✅ Get song details, duration, album cover, and preview  
✅ Search for movies and retrieve rating, genre, and poster  

## 📦 Technologies Used
- **Express.js** (Web framework)
- **Axios** (HTTP requests)
- **Cors** (Cross-origin requests)
- **dotenv** (Environment variables)
- **Render** (Deployment platform)

---

## 🔧 Installation
1️⃣ Clone the repository:
```sh
git clone https://github.com/your-repo/music-movie-api.git
cd music-movie-api
```

2️⃣ Install dependencies:
```sh
npm install
```

3️⃣ Create a `.env` file and add:
```sh
TMDB_API_KEY=your_tmdb_api_key
TMDB_ACCESS_TOKEN=your_tmdb_access_token
```

4️⃣ Start the server:
```sh
npm start
```

---

## 🎵 Music Search API

### **🔍 Search for a Song**
**Endpoint:**  
```
GET /api/music?q=Shape of You
```

**Response Example:**
```json
{
  "results": [
    {
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "album": "Divide",
      "duration": "3m 53s",
      "preview": "https://preview-url.mp3",
      "cover": "https://cover-image.jpg"
    }
  ]
}
```

---

## 🎬 Movie Search API

### **🔍 Search for a Movie**
**Endpoint:**  
```
GET /api/movie?q=Inception
```

**Response Example:**
```json
{
  "results": [
    {
      "title": "Inception",
      "year": "2010",
      "rating": "8.8/10",
      "overview": "A thief who enters the dreams of others...",
      "poster": "https://image.tmdb.org/t/p/w500/inception-poster.jpg"
    }
  ]
}
```

---

## 🌐 Deployment on Render
1️⃣ Push the project to GitHub  
2️⃣ Create a Render web service  
3️⃣ Set **Build Command:** `npm install --force`  
4️⃣ Set **Start Command:** `node server.js`  
5️⃣ Add Environment Variables in Render dashboard  
6️⃣ Deploy and test your API! 🚀

---

## 🤝 Contributing
Feel free to **submit pull requests**, report issues, or suggest improvements!  

---

## 📜 License
This project is **MIT-licensed**, feel free to modify and use it.  

---

## 🛠️ Future Enhancements
✔ Add trending music/movies  
✔ Fetch trailers and streaming links  
✔ Provide lyrics alongside songs  

---

## 📞 Contact
If you have questions, **reach out!**  
📧 Email: akewusholaabdulbakri101@gmail.com 
📌 GitHub: [https://github.com/Neaterry6/music-movie-search-API)  



