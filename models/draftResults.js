const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema({
  pick: {
    type: String
  },
  position: {
    type: String
  },
  name: {
    type: String
  },
  draftee: {
    type: String
  },
  team: {
    type: String
  }
});

const DraftData = mongoose.model('draftResult', draftSchema);

module.exports = DraftData;