const mongoose = require('mongoose');
const section = new mongoose.Schema({
    sectionName : {
        type : 'string',
        required : true
    },
    subSection : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'SubSection'
        }
    ],
})

module.exports = mongoose.model('Section',section);