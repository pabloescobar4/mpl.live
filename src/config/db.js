const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect('mongodb+srv://nilesh98:nilesh98@mplclone.gyfvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    // return mongoose.connect('mongodb://localhost:27017/mpl_clone');
}

module.exports = connect;