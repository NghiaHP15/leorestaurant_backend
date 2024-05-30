const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
        image: { type: String, required: true},
        category: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryFood',
            require: true,
        },
        recipe: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe',
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const CategoryFood = require('./CategoryFood')

CategoryFood.aggregate([
    {
        $lookup: {
            from: 'categoryfoods', // Tên của collection khác
            localField: 'category', // Trường trong menu collection
            foreignField: '_id', // Trường trong categories collection
            as: 'category_info' // Tên của trường kết quả sau khi "join"
        }
    }
]).exec((err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(result);
});

const Recipe = require('./Recipe')

CategoryFood.aggregate([
    {
        $lookup: {
            from: 'categoryfoods', // Tên của collection khác
            localField: 'category', // Trường trong menu collection
            foreignField: '_id', // Trường trong categories collection
            as: 'category_info' // Tên của trường kết quả sau khi "join"
        }
    }
]).exec((err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(result);
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;