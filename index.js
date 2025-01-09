import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendMessage } from "./docGenerator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Новый метод
app.post("/send-input", async (req, res) => {
  // Присваевыем input из тела запроса
  const userInput = req.body.input;
  console.log(`Received input: ${userInput}`);

  try {
    
    // Вызываем asyn функцию sendMessage из docGenerator
    const message = await sendMessage(userInput);

    //
    res.json({ message });
  } catch (error) {
    console.error("Error processing result:", error);
    res.status(500).json({ message: "Error processing result" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
