const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
},{timestamps: true});

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);
