const fs = require('fs')
const Movie=require('./../models/movieModel')
const movies = JSON.parse(fs.readFileSync('./data/movies.json'))


// const checkId = (req, res, next, value) => {
//     console.log('movie id is ' + value)
//     let movie = movies.find( el => el.id === value)

//     if (!movie) {
//         return res.status(404).json({
//             status: 'Fail',
//             message: `Movie with id ${value} is not found`
//         })

//     }

//     next();
// }


const validateBody=(req,res,next)=>{
    if (!req.body.duration || !req.body.description){
        return res.status(400).json({
            status:'Fail',
            message:'Not a valid movie data'
        })
    }
    next()

}


const getAllMovies = (req, res) => {

    Movie.find().then((doc)=>{
        res.status(200).json({
            status:'Success',
            length:doc.length,
            data:{
                movies:doc
            }
        })
    }).catch((error)=>{
        res.status(404).json({
            status:'Fail',
            message:error.message


        })
    })

    // res.status(200).json({
    //     status: 'success',
    //     requestedAt: req.requestedAt,
    //     count: movies.length,
    //     data: {
    //         movies: movies
    //     }
    // })
    //-------------------------------------------------------------


}

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
const getMovie = (req, res) => {

    // Movie.find({_id:req.params.id}).then((doc)=>{
    //     res.status(200).json({
    //         status:'success',
    //         data:{
    //             movie:doc
    //         }
    //     })
    // })

    Movie.findById(req.params.id).then((doc)=>{
        if(doc.length===0){
            return res.status(404).json({
                status:'Fail',
                message:'No movie found with this id'
            })

        }
        res.status(200).json({
            status:'success',
            length:doc.length,
            data:{
                movie:doc
            }
        })

    }).catch((err)=>{
        res.status(404).json({
            status:'Fail',
            message:err.message
        })
    })






    // const id = req.params.id * 1;
    // let movie = movies.find( el => el.id === id*1)
    // res.status(200).json({
    //     status: 'success',
    //     requestedAt: req.requestedAt,
    //     //count: movies.length,
    //     data: {
    //         movies: movie
    //     }
    // })
    //------------------------------------------------------------------------------------------






}

const createMovie = (req, res) => {
    Movie.create(req.body).then((doc)=>{
        res.status(201).json({
            status:'success',
            data:{
                movie:doc
            }
        })
    }).catch((error)=>{
        res.status(400).json({
            status:'Fail',
            Message:error.message
        })

    })





    

}









const updateMovie = (req, res) => {

    // let id = req.params.id * 1;
    // let movieToUpdate = movies.find(el => el.id === id);

    // if (!movieToUpdate) {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'No movie object is found'
    //     })

    // }
    // let index = movies.indexOf(movieToUpdate);

    // Object.assign(movieToUpdate, req.body);

    // movies[index] = movieToUpdate

    // fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             movie: movieToUpdate
    //         }
    //     })
    // })
    //---------------------------------------------------------------------------------------------


    Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}).then((doc)=>{
        res.status(200).json({
            status:'success',
            data:{
                movie:doc
            }

        })
    }).catch((err)=>{
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    })

}


const deleteMovie = (req, res) => {
    // const id = req.params.id * 1;
    // const movieToDelete = movies.find(el => el.id === id);

    // if (!movieToDelete) {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'Invalid id'
    //     })
    // }

    // const index = movies.indexOf(movieToDelete);
    // movies.splice(index, 1);
    // fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    //     res.status(204).json({
    //         status: 'success',
    //         data: {
    //             movie: null
    //         }
    //     })
    // })
    //-----------------------------------------------------------------------------------------

    Movie.findByIdAndDelete(req.params.id).then((doc)=>{
        res.status(200).json({
            status:'suceeess',
            data:{
                movie:doc
            }
        })
    }).catch((err)=>{
        res.status(404).json({
            status:'Fail',
            message:err.message
        })
    })
}


module.exports = {
    createMovie,
    getAllMovies,
    getMovie,
    deleteMovie,
    updateMovie,
    //checkId,
    validateBody

}
