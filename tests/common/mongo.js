import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const databaseName = 'Homebase';
const collectionName = 'daonames';

async function saveToDatabase(daoName) {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    await collection.deleteMany({});

    await collection.insertOne({ daoName: daoName });
  } finally {
    await client.close();
  }
}

async function getDAOName() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    const result = await collection.findOne();
    return result ? result.daoName : null;
  } finally {
    await client.close();
  }
}

export { saveToDatabase, getDAOName };
