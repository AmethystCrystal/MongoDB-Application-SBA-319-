import express from "express"
const app = express()
import customers from "./routes/customers.mjs"


app.use(express.json())
app.use('/customers', customers)

app.use((err, req, res, next) => {
    res.status(500).send("Something's Not Quite Right...")
});

app.listen(4000, () => {
    console.log('Server Running on Port 4000')
});