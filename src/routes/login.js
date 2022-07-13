const express = require('express');
const router = require("express").Router();
const passport = require("passport");

const loginController = require('../app/controllers/LoginController');
//router.post('/test', loginController.test);

const CLIENT_URL = "http://localhost:3000/";
//router.get('/logout', loginController.logout);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/login/success", loginController.loginSuccess);

router.get("/login/failed", loginController.loginFailed);

router.get("/logout", loginController.logoutGoogle);

router.get("/google/callback", passport.authenticate("google", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
  );
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
);
// router.put('/update/save/:id', staffController.update);

// router.get('/update/:id', staffController.edit);

router.get('/', loginController.index);

module.exports = router;
