

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../../config");
const bodyParser = require("body-parser");
let user = {};

const GOOGLE_CLIENT_ID='426366475413-v2gteenmu8hmossao155govmol7vejuo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET='S8CMeygNxKo73FV02NU4l_1g'

passport.serializeUser( (user,cb) => {
    console.log("SERIALIZE USER");
    cb(null,user);
})

passport.deserializeUser( (user,cb) => {
    console.log("DE-SERIALIZE USER");
    cb(null, user);
})

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackUrl: "/test"
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log("PROFILE: ", profile)
        user = {...profile}
        return cb(null, profile);
    })
);

const router = express.Router();
router.use(cors());
router.use(bodyParser.json())
router.use(passport.initialize());

router.get("/auth/google", passport.authenticate("google", { scope: ['openid profile email']}));
router.get("/test", passport.authenticate("google", { failureRedirect: '/login' }),
    (req,res) => {
        console.log("MADE IT !!!")
        res.redirect("/gallery");
    }
)

module.exports = router;

// const bodyParser = require("body-parser");
// const express = require("express");

// const router = express.Router();

// router.use(bodyParser.json());

// const thoughts = [
//   { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
//   { _id: 456, message: "I'm watching Netflix.", author: "unknown" }
// ];

// router.get("/api/thoughts", (req, res) => {
//   console.log("HERE?")
//   const orderedThoughts = thoughts.sort((t1, t2) => t2._id - t1._id);
//   res.send(orderedThoughts);
// });

// router.post("/api/thoughts", (req, res) => {
//   const { message } = req.body;
//   const newThought = {
//     _id: new Date().getTime(),
//     message,
//     author: "unknown"
//   };
//   thoughts.push(newThought);
//   res.send({ message: "Thanks!" });
// });

// module.exports = router;