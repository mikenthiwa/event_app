import application from './App';
import http from 'http';

const server = http.createServer(application());

const port = 7000;
server.listen(port, () => console.log('I am running'));


