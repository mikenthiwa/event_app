import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvent: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
  booking: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Booking'
    }
  ]
});

module.exports = mongoose.model('User', userSchema)
