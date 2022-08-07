/* const fetch = require("node-fetch"); */
let db = require("../database/models");
const {Op} = require("sequelize");

module.exports = {

list2: async function(req, res) {

    db.Movies.findAll({
        include: [{association:"genre"}]
    })
    .then(function(movies) {

        movies = movies.map((movie, i) => {
            movies = {
                id: movie.id,
                title: movie.title,
                rating: movie.rating,
                length: movie.length,
                /* image: `http://localhost:3001/uploads/products/${movie.image}`, */
                /* genre: movie.genre */
        }
            return movies
        })


    return res.status(200).json({
        data: movies,
        status: 200
        
    })
})
},
    list: (req, res) => {
        db.Movies.findAll({
            include: [{ all: true }]
        })
        .then(movies => {

            movies = movies.map(movie => {
                movies = {
                    id: movie.id,
                    title: movie.title,
                    rating: movie.rating,
                    length: movie.length,
                    img: `http://localhost:3001/images/${movie.img}`,
                    genre: movie.genre,
                    actors: movie.actors
            }
                return movies
            })

            return res.json(movies)
        })
        .catch(error =>console.error(error))
    },

    detail: (req, res) => {
        db.Movies.findByPk(
            req.params.id,
            {include: [{association:"genre"}]
        })
        .then(movie => {
            return res.json(movie)
        })
    },

    buscar: (req, res) => {
        db.Movies.findAll(
            {where: {
                title: {[Op.like]: '%' + req.query.search + '%'}
            }}
        )
        .then(resultado => {
            if (resultado.length > 0) {
                return res.status(200).json(resultado)
            }
            return res.status(200).json('No hay resultados para tu busqueda')
        })
    },

    genresList: (req, res) => {
        db.Genres.findAll({
            include: [{ all: true }]
        })
        .then(genres => {

            genres = genres.map(genre => {
                genres = {
                    id: genre.id,
                    name: genre.name,
                    movies: genre.movies
            }
                return genres
            })

            return res.json(genres)
        })
        .catch(error =>console.error(error))
    }


/* ,

    productsCategories: function(req, res) {
        db.Productscategories
        .findAll({
            include: [{association:"productos"}]
        })
        .then(function(categories) {
        return res.status(200).json({
            total: categories.length,
            data: categories,
            status: 200
        })
    })
},

    detail: function(req, res) {
        db.Products
        .findByPk(req.params.id)
        .then(function(product) {
        return res.status(200).json({
            data: product,
            imageUrl: `http://localhost:3001/uploads/products/${product.image}`,
            status: 200
        })
    })
},

    guardar: function(req, res) {

        db.Products
        .create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            //image: req.file.filename,
            category_id: req.body.category
        })
        .then(function(product) {
            return res.status(200).json({
                data: product,
                status: 200,
                created: "ok"
            })})
            //res.redirect("/");
        },

    delete: function(req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        //res.redirect("/")
    }    */


} 




  

