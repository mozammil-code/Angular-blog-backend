
const express = require('express');

let app = express();
const morgan=require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRouter=require('./Routes/moviesRoutes')
const blogRouter=require('./Routes/blogroute')
const checkId=require('./Controllers/moviesController')







const logger=function(req,res,next){

    console.log('Custom middleware called')
    next()

}




app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
//app.use(morgan('dev'))
//app.use(logger)
app.use((req,res,next)=>{
    req.requestedAt=new Date().toISOString();
    next()
    
})












//ROUTE HANDLER FUNCTIONS
// const getAllMovies = (req, res) => {

//     res.status(200).json({
//         status: 'success',
//         requestedAt:req.requestedAt,
//         count: movies.length,
//         data: {
//             movies: movies
//         }
//     })
// }

// const getMovie = (req, res) => {
//     const id = req.params.id * 1;
//     const movie = movies.find((el) => el.id === id)
//     if (movie) {
//         res.status(200).json({
//             status: 'success',
//             data: {
//                 movie: movie
//             }
//         })

//     } else {
//         res.status(404).json({
//             status: 'Fail',
//             message: `Movie with id ${id} is not found`
//         })
//     }


// }


// const createMovie = (req, res) => {
//     const newId = movies[movies.length - 1].id + 1;

//     const newMovie = Object.assign({ id: newId }, req.body)
//     movies.push(newMovie);
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 movie: newMovie
//             }
//         })

//     })

// }

 



// const updateMovie = (req, res) => {

//     let id = req.params.id * 1;
//     let movieToUpdate = movies.find(el => el.id === id);

//     if (!movieToUpdate) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'No movie object is found'
//         })

//     }
//     let index = movies.indexOf(movieToUpdate);

//     Object.assign(movieToUpdate, req.body);

//     movies[index] = movieToUpdate

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         res.status(200).json({
//             status: 'success',
//             data: {
//                 movie: movieToUpdate
//             }
//         })
//     })


// }


// const deleteMovie = (req, res) => {
//     const id = req.params.id * 1;
//     const movieToDelete = movies.find(el => el.id === id);

//     if (!movieToDelete) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid id'
//         })
//     }

//     const index = movies.indexOf(movieToDelete);
//     movies.splice(index, 1);
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         res.status(204).json({
//             status: 'success',
//             data: {
//                 movie: null
//             }
//         })
//     })
// }





// app.get('/api/v1/movies',getAllMovies)
// app.post('/api/v1/movies',createMovie)
// app.get('/api/v1/movies/:id?',getMovie)
// app.patch('/api/v1/movies/:id',updateMovie)
// app.delete('/api/v1/movies/:id',deleteMovie)

// app.route('/api/v1/movies/').get(getAllMovies).post(createMovie);
// app.route('/api/v1/movies/:id').get(getMovie).patch(updateMovie).all(deleteMovie)



//THESE BELOW ROUTES ARE FIRST MOVED TO NEW FILE CALLED MOVIESROUTES
// const moviesRouter=express.Router()  =>THIS RETURNS MIDDLEWARE SO IT MUST BE INSIDE USE METHOD

// moviesRouter.route('/api/v1/movies').get(getAllMovies).post(createMovie);
// moviesRouter.route('/api/v1/movies/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)

app.use('/api/v1/blog',blogRouter)
app.use('/api/v1/movies',moviesRouter)



module.exports=app