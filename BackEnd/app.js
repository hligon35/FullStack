const express = require("express");
const Song = require("./models/song");
var cors = require('cors')
// const bodyParser = require("body-parser")
const jwt =require ("jwt-simple")
const User = require("./models/users")

const app = express();
app.use(cors())

//Middleware that parses HTTP request with JSON body
app.use(express.json());

const router = express.Router();
const secret = "supersecret"

// Creating a new user
router.post("/users", async(req, res) => {
    if(!req.body.username || !req.body.password){
        res.status(400).json({error: "Missing username and password!"})
    }
    const newUser = await new User({
        username: req.body.username,
        password: req.body.password,
        status: req.body.status
    })
    
    try{
        await newUser.save()
        res.status(201) //created
    }
    catch(err){
        res.status(400).send(err)
    }
})

//Get list of all songs in a database
router.get("/songs", async(req, res) =>{
    try{
        //Find all songs in the database. Sen objects. Then log them out.
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
        res.status(400).send(err)
    }
})

//Grab a single song in the database
router.get("/songs/:id", async(req, res) =>{
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch (err){
        res.status(400).send(err)
    }
})


//added song to the database
router.post("/songs", async(req, res) =>{
    try{
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch (err){
        res.status(400).send(err)
    
    }

})

//update an existing song in the database, use a put request
router.put("/songs/:id", async(req, res) =>{
    //first find and update song front end wants to update
    try{
        const song = req.body
        await song.updateOne({_id:req.params.id}, song)
        console.log(song)
        res.sendStatus(204)

    }
    catch (err){
        res.status(400).send(err)
    }
})

router.delete("/songs/:id", async(req, res) =>{
    //method to delete song in mongoose/mongo
    try{
        const song = await Song.findById(req.params.id)
        console.log(song)
        await Song.deleteOne({_id: song._id})
        res.sendStatus(204)
    }

    catch(err){
        res.status(400).send(err)
    }
})


app.use("/api", router);

app.listen(3000);