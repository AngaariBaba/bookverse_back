import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser"; // Import body-parser
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

/* Middlewares */
app.use(bodyParser.json()); // Use body-parser for parsing JSON bodies
app.use(cors());

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);
let pass = "password";

var links = ['https://inkinmytea.files.wordpress.com/2011/12/apj.jpg?w=640','https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg','https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg','https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg','https://19en282jw7pc3zpwj22pg8v0-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/Good-to-Great-Jim-Collins.jpg'];

/* MongoDB connection */
mongoose.connect(
 ` mongodb+srv://srashtidwivedi001:${pass}@cluster0.5sqwcpp.mongodb.net/?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MONGODB CONNECTED");
  }
);


app.get("/recentbooks",(req,res)=>{
  console.log("sending books");


    res.json({books:links});
})

app.get("/", (req, res) => {
  res.status(200).send("Welcome to BookVerse");
});

app.post("/addbook", (req, res) => {
  console.log("add book");
 const data = req.body;

 // Handle the book data as needed
 console.log("Received book data:", data);
 // Respond to the client as needed

 console.log("before inserting : ",links);
 links.push(data['imageUrl']);
 console.log("after inserting : ",links);
 res.status(200).json({ message: "Book added successfully" });
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});
