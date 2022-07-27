const express = require('express');
const router = require("express").Router();
const passport = require("passport");

const loginController = require('../app/controllers/LoginController');
//router.post('/test', loginController.test);
require('dotenv').config();


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/login/success", loginController.loginSuccess);

router.get("/login/failed", loginController.loginFailed);

router.get("/logout", loginController.logoutGoogle);

router.get("/google/callback", passport.authenticate("google", {
      successRedirect: process.env.URL_REACT||'http://localhost:3000/',
      failureRedirect: "/login/failed",
    })
  );
// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//     "/facebook/callback",
//     passport.authenticate("facebook", {
//       successRedirect: process.env.URL_REACT,
//       failureRedirect: "/login/failed",
//     })
// );
// router.put('/update/save/:id', staffController.update);

// router.get('/update/:id', staffController.edit);

router.get('/', loginController.index);

module.exports = router;
