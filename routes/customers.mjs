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
})


export default router;
