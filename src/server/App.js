import express from 'express';
import expressPlayground from 'graphql-playground-middleware-express';
import cors from 'cors';
import Auth from '../middleware/checkAuth';
import bodyParser from 'body-parser';
import dbConnection from "../db/models";
import Routes from '../routes'


const application = () => {
  const app = express();
  app.use(Auth);
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/api/v1/graphql', Routes);
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

  dbConnection();
  return app
};


export default application;
