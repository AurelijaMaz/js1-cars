const mongoose = require('mongoose');

const schema = new mongoose.Schema ({  
brand: {
    type: String,
    required: true
},
model: {
    type: String,
    required: true
},
year: {
    type: Number,
    required: true
},
engineVolume: {
    type: Number,
    required: true
},
},
{ timestamps: true }
 );

export default mongoose.Model('Car', schema);