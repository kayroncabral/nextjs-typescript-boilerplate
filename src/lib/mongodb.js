import { MongoClient } from 'mongodb'
import url from 'url'

const uri = process.env.MONGODB_URI
const options = { useUnifiedTopology: true, useNewUrlParser: true }

let cachedDatabase

if (!process.env.MONGODB_URI) throw new Error('Please add your Mongo URI to environment variables')

const connect = async () => {
  if (cachedDatabase) return cachedDatabase

  const client = await MongoClient.connect(uri, options)

  const databaseName = new url.URL(uri).pathname.substr(1)

  const database = client.db(databaseName)

  cachedDatabase = database

  return database
}

export default connect
