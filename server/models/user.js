const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const Dog = require('./dog')
const Comment = require('./comment')

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true,
            unique: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String, 
            required: true,
        },
        savedDogs: [Dog],
        commentsMade: [Comment],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// HASH USER PW
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});

// VALIDATE USER PW
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

// COUNT DOGS SAVED
userSchema.virtual('dogCount').get(function () {
    return this.savedDogs.length;
})

// COUNT COMMENTS MADE

const User = model('User', userSchema);

module.exports = User;