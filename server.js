const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const { queryType } = require('./query');


const port = 500;
const app = express();

const schema = new GraphQLSchema( {query: queryType } );

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.get('/hello', (req, res) => {
    res.send('hello world s');
});

app.listen(port);

console.log(`Server running on localhost:${port}`);