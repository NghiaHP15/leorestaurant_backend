const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true},
    orderItems: [ 
        {
            menu: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Menu',
                require: true,
            },
            amount: { type: Number, required: true},          
        },
    ],
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true,
    },
    status: { type: Boolean, default: false, required: true},

},
{
    timestamps: true,
}
);


const Menu = require('./Menu')

Menu.aggregate([
    {
        $lookup: {
            from: 'menus', // Tên của collection khác
            localField: 'menu', // Trường trong menu collection
            foreignField: '_id', // Trường trong categories collection
            as: 'menu_info' // Tên của trường kết quả sau khi "join"
        }
    }
]).exec((err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(result);
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;