const  { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt 
} = require('graphql');

const _ = require ('lodash');
const { 
    movieType,
    directorType
 } =require('./types');

const { 
    movies, 
    directors 
} = require ('./data');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: function() {
                return "Hello world";
            }
        },
        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return find(movies, {id: args.id});
            }
        },
        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (source, args) => {
                return _.find(directors, {id: args.id});
            }
        }
    }
});

exports.queryType = queryType;