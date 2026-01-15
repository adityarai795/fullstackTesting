import express from 'express';
import cors from 'cors';  

const app = express();
const PORT =  3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/data", (req, res) => { 
  try {
    res.json({ message: "This is some data from the server." });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
