import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"

const router = express.Router()

// GET - Index Route - All Customers
router.get('/', async (req, res) => {
    const collection = await db.collection('customers')
    const results = await collection.find({}).limit(75).toArray()
    res.send(results).status(200)
});

// GET - Show Route - One Customer
router.get('/:id', async (req, res) => {
    const collection = await db.collection('customers') 
    const query = {_id: new ObjectId(req.params.id)} 
    const result = await collection.findOne(query) 

    if(!result) res.send('Not Found!').status(404) 
    else res.send(result).status(200)
});

// POST - Create Route - Create a Customer
router.post('/', async (req, res) => {
    const collection = await db.collection('customers')
    const newDoc = req.body; 
    newDoc.date = new Date(); 
    const result = await collection.insertOne(newDoc)
    res.send(result).status(204) 
});

//UPDATE - PUT/PATCH - update a user
router.patch('/:id', async (req, res) => {
    const query = {_id: new ObjectId(req.params.id)}
    const updates = req.body;
    const collection = await db.collection('customers')
    const result = await collection.updateOne(query, { $set: updates });
    res.send(result).status(200)
});

//DELETE - DELETE - delete a user
router.delete("/:id", async (req, res) => {
    const query = {_id: new ObjectId(req.params.id)}
    const collection = db.collection('customers')
    const result = await collection.deleteOne(query)
    res.send(result).status(200)
});


export default router;
