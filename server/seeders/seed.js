const faker = require('faker')
const db = require('../config/connection')
const { User, Comment, Post, Dog } = require('../models')
const dogSeeds = require('./dogSeeds.json')

db.once('open', async () => {
    await User.deleteMany({});
    await Comment.deleteMany({});
    await Dog.deleteMany({});
    await Dog.create(dogSeeds)

    const userData = [];

    for (let i = 0; i < 25; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        userData.push({ username, email, password })
    }

    const createdUsers = await User.collection.insertMany(userData);

    let commentData = [];
    for (let i = 0; i < 25; i++) {
        const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const randomUser = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUser];
        const madeComment = await Comment.create({ commentBody, username });

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { comments: madeComment._id } }
        );
        commentData.push(madeComment);
    }

    console.log('DB SEEDED SUCCESSFULLY :)');
    process.exit(0);
})