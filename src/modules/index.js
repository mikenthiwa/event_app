import {Auth} from "./auth/authController";
import {Events} from "./events/eventController";
import {Booking} from "./booking/bookingResolver";


module.exports = {
  createUser: args => Auth.register(args),
  loginUser: args => Auth.login(args),
  createEvent: (args, req) => {
    const { isAuth } = req;
    return isAuth ? Events.createEvents(args, req) : new Error('Please provide token')
  },
  events: (res, req) => {
    const {isAuth} = req;
    return isAuth ? Events.getEvents(res, req) : new Error('Please provide token')
  },
  bookings: () => Booking.getBookings(),
  book: args => Booking.bookEvent(args)
};
