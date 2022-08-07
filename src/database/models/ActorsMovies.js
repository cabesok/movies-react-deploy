module.exports = (sequelize, dataTypes) => {
	let alias = "ActorsMovies";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		actor_id: {
			type: dataTypes.INTEGER,
            references: {
                model: 'Actors',
                key: 'id'
            }
		},
		movie_id: {
			type: dataTypes.INTEGER,
            references: {
                model: 'Movies',
                key: 'id'
            }
		}
		

	};

	let config = {
		tableName: "actor_movie",
		timestamps: false
		};

	const ActorMovie = sequelize.define(alias, columns, config);
	    
    ActorMovie.associate = function(models) {
        ActorMovie.belongsTo(models.Actors , {
            foreignKey: "actor_id"
        }),
		ActorMovie.belongsTo(models.Movies , {
            foreignKey: "movie_id"
        })
}

	return ActorMovie;

}