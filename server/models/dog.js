const { Schema, model } = require('mongoose');

const dogSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
        },
        breeder: {
            type: String,
        },
        activities: {
            type: Array,
        },
    }
)

//module.exports = dogSchema;

const Dog = model('Dog', dogSchema)

module.exports = Dog;