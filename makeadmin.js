const express = require('express')
const User = require('./models/User');
const bcrypt = require('bcrypt')
async function makeAdmin() {
    try {
        let user = await User.findOne({ email: "hemantgupta132@gmail.com" });
        if (user) {
            console.log("user updated....")
        } else {
            let user = new User();
            user.firstName = " Hemant";
            user.lastName = "Gupta";
            user.email = "hemantgupta132@gmail.com";
            let encryptedPassword = bcrypt.hashSync("12345", 10)
            user.password = encryptedPassword;

            user.usertype = "Admin";
            await user.save();
            console.log("Admin created Successfully..................");
        }

    } catch (err) {
        console.log(err)
    }
}
module.exports = makeAdmin; 