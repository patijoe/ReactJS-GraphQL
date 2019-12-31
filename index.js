import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Todo listo :()');
});

app.use(
  '/graphql',
  graphqlHTTP({
    //schema que va a utilizar
    schema,
    //utilizar graphiql
    graphiql: true
  })
);

app.listen(8000, () => console.log('El servidor está funcionando'));
