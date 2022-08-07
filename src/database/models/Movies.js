module.exports = (sequelize, dataTypes) => {
	let alias = "Movies";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: dataTypes.STRING
		},
		rating: {
			type: dataTypes.INTEGER
		},
		length: {
			type: dataTypes.INTEGER
		},
		genre_id: {
			type: dataTypes.INTEGER
		},
		img: {
			type: dataTypes.STRING
		}
		

	};

	let config = {
		tableName: "movies",
		timestamps: false
		};

	const Movie = sequelize.define(alias, columns, config);
	    
    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres , {
            as: "genre",
            foreignKey: "genre_id"
        }),
		Movie.belongsToMany(models.Actors , {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
			timestamps: false
        })
	}
		

	return Movie; 

}