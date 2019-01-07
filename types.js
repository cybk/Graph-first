const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql');

const _ = require ('lodash');

let {movies} = require('./data');

movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }
    }
});

directorType = new GraphQLObjectType ({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: GraphQLList(movieType),
            resolve: (source, args) => {
                return _.filter(movies, {directorId: source.id} );
            }
        }
    },
    
});

exports.movieType = movieType;
exports.directorType = directorType;