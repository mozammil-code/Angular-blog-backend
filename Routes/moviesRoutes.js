// const express=require('express');
// const moviesController=require('../Controllers/moviesController')
// const fs = require('fs')
// const movies = JSON.parse(fs.readFileSync('./data/movies.json'))


// // const getAllMovies = (req, res) => {

// //     res.status(200).json({
// //         status: 'success',
// //         requestedAt:req.requestedAt,
// //         count: movies.length,
// //         data: {
// //             movies: movies
// //         }
// //     })
// // }

// // const getMovie = (req, res) => {
// //     const id = req.params.id * 1;
// //     const movie = movies.find((el) => el.id === id)
// //     if (movie) {
// //         res.status(200).json({
// //             status: 'success',
// //             data: {
// //                 movie: movie
// //             }
// //         })

// //     } else {
// //         res.status(404).json({
// //             status: 'Fail',
// //             message: `Movie with id ${id} is not found`
// //         })
// //     }


// // }


// // const createMovie = (req, res) => {
// //     const newId = movies[movies.length - 1].id + 1;

// //     const newMovie = Object.assign({ id: newId }, req.body)
// //     movies.push(newMovie);
// //     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
// //         res.status(201).json({
// //             status: 'success',
// //             data: {
// //                 movie: newMovie
// //             }
// //         })

// //     })

// // }

 



// // const updateMovie = (req, res) => {

// //     let id = req.params.id * 1;
// //     let movieToUpdate = movies.find(el => el.id === id);

// //     if (!movieToUpdate) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'No movie object is found'
// //         })

// //     }
// //     let index = movies.indexOf(movieToUpdate);

// //     Object.assign(movieToUpdate, req.body);

// //     movies[index] = movieToUpdate

// //     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
// //         res.status(200).json({
// //             status: 'success',
// //             data: {
// //                 movie: movieToUpdate
// //             }
// //         })
// //     })


// // }


// // const deleteMovie = (req, res) => {
// //     const id = req.params.id * 1;
// //     const movieToDelete = movies.find(el => el.id === id);

// //     if (!movieToDelete) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'Invalid id'
// //         })
// //     }

// //     const index = movies.indexOf(movieToDelete);
// //     movies.splice(index, 1);
// //     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
// //         res.status(204).json({
// //             status: 'success',
// //             data: {
// //                 movie: null
// //             }
// //         })
// //     })
// // }


// //IT'S A GOOD PRACRTICE ,WHEN YOU CREATED A SEPERATE FILE FOR ROUTES INSTEAD OF CALLING MOVIESROUTER CALL IT ROUTER.AND IT IS JUST A CONVENTION

// //const moviesRouter=express.Router()
// // moviesRouter.route('/api/v1/movies').get(getAllMovies).post(createMovie);
// // moviesRouter.route('/api/v1/movies/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)
// //----------------------------------------------------------------------------------------------------------------



// const router=express.Router()

// //router.param('id',moviesController.checkId)

//  router.route('/').get(moviesController.getAllMovies).post(moviesController.validateBody,moviesController.createMovie);



// router.route('/:id').get(moviesController.getMovie)
// .patch(moviesController.updateMovie).delete(moviesController.deleteMovie)



// module.exports=router;