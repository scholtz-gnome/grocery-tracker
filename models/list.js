const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  permissions: {
    owner: {
      type: String,
      required: true
    },
    guests: {
      type: Array
    }
  }
}, { timestamps: true });

const List = mongoose.model("List", listSchema);

module.exports = List;