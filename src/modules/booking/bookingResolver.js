import Bookings from '../../db/models/booking';
import Event from '../../db/models/event';
import User from '../../db/models/user';

export class Booking {
  static async getBookings(){
    const bookingResponse = await Bookings.find();
    return bookingResponse.map(async bookedEvent => {
      const eventResponse = await Event.findById(bookedEvent.event);
      const userResponse = await User.findById(bookedEvent.user);
      const EventCreator = await User.findById(eventResponse.creator)
      return {
        ...bookedEvent._doc,
        _id: bookedEvent.id,
        event: {
          ...eventResponse._doc,
          _id: '****',
          date: new Date(eventResponse.date).toDateString(),
          creator: {...EventCreator._doc, _id: '****', createdEvent: '', password: null},
        },
        user: {
          ...userResponse._doc,
          _id: '****'
        }
      }
    })
  }

  static async bookEvent(args) {
    const { eventName: {title} } = args;
    const event = await Event.findOne({title: title});
    const userResponse = await User.findById('5d287665d49d74be16fbf8c0');
    if(!userResponse) {
      throw new Error('User does not exist')
    }else {
      if (event) {
        if (event.isBooked) {
          throw new Error('Event is booked');
        } else {
          await Event.updateOne({isBooked: true});
          await new Bookings({
            event: event._id,
            user: '5d287665d49d74be16fbf8c0'
          }).save();
          return event;
        }
      }
    }
  }
}
