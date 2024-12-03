const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/dash_board');
        console.log('connect successfully')
    }
    catch (er) {
        console.log('connect failed')
    }
}

module.exports = { connect }