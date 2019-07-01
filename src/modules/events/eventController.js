import Event from '../../db/models/event';
import User from '../../db/models/user';
import checkAuth from '../../middleware/checkAuth';

export class Events {

  static async createEvents (args, req) {

    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: '5d3a9dfcf4f5e9162e060129'
    });

    const userResponse = await User.findById('5d3a9dfcf4f5e9162e060129');
    if (!userResponse) {
      return throw new Error('User does not exist')
    } else {
      userResponse.createdEvent.push(event);
      await userResponse.save();
      const eventResponse = await event.save();
      return {...eventResponse._doc}
    }

  }

  static async getEvents () {
    const eventResponse = await Event.find();
    return eventResponse.map(async event => {
      const userResponse = await User.find(event.creator);
      return {...event._doc, creator: {...userResponse[0]._doc}}
    })
  }

}
