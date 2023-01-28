const { Schema, model } = require('mongoose');

// Schema to create a new user 
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },
        emailAddress: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                },
                message: 'Not a valid email address'

            }
        },

    });

    module.exports = User;
