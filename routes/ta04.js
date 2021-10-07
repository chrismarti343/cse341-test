//TA04 PLACEHOLDER
const express = require('express');

const cors = require('cors'); // Place this with other requires (like 'path' and 'express')


const router = express.Router();

const corsOptions = {
  origin: "https://<your_app_name>.herokuapp.com/",
  optionsSuccessStatus: 200
};


router.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://chris:00yzwBxJUnQr2Il2@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";





router.get('/', (req, res, next) => {
  res.render('pages/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
