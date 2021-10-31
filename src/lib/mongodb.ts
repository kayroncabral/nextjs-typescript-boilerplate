import { Db, MongoClient } from 'mongodb'
import url from 'url'

let cachedDatabase: Db | undefined

const connect = async () => {
  if (!process.env.MONGODB_URI) { throw new Error('Please add your Mongo URI to environment variables') }
  if (cachedDatabase) return cachedDatabase

  const databaseName = new url.URL(process.env.MONGODB_URI).pathname.substr(1)
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const database = client.db(databaseName)

  cachedDatabase = database

  return database
}

export default connect
