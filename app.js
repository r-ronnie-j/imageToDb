const express = require('express');
const app = express();
const userRoute = require("./routeUser")
const mongoose = require("mongoose")
const path = require("path")

// Connect to MongoDB
mongoose.connect("mongodb+srv://ronnieJ:kQBW5ASntlPLP5XP@cluster0.apwhp.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform any other operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname + "/public")));


app.use('/user', userRoute)

app.listen(3000, () => {
  console.log('Server started on port 3001');
});
