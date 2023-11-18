import { MongoClient } from "mongodb"
const cs = process.env.ATLAS_URI || "mongodb+srv://AmethystCrystal:dqX6Yx5fjjYSsfM@mongopractice.xcyaphc.mongodb.net/MongoDBExpressNode?retryWrites=true&w=majority"
const client = new MongoClient(cs)

let conn;
try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }
  
  let db = conn.db("sample_analytics");
  
  export default db;