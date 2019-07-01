import mongoose from "mongoose";
import { envVar } from "../../../environment";

console.log(envVar.database.dbName);

const dbConnection = () => {
  mongoose.connect(
    `mongodb+srv://${envVar.database.username}:${envVar.database.password}@cluster0-0dwcs.mongodb.net/${envVar.database.dbName}?retryWrites=true&w=majority`,
    {useNewUrlParser: true})
    .then(() => console.log('Database has successfully connected'))
    .catch(error => console.log(error));
};

export default dbConnection
