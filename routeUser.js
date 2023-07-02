const express = require('express');
const router = express.Router();
const User = require('./User'); // Assuming you have a User model defined


router.get("/",async (req,res)=>{
  let user = await User.find({});
  res.json(user);
})

router.post('/', (req, res) => {
  const { name, profile } = req.body;
  console.log(name)
  console.log(profile)

  // Create a new User document using the User model
  const newUser = new User({ name, profile });

  // Save the user to the database
  newUser.save()
    .then(() => {
      res.json({ success: true }); // Writing successful
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.json({ success: false }); // Writing failed
    });
});

module.exports = router;
