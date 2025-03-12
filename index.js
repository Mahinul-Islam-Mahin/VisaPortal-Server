const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mahinul-islam.rmcx7.mongodb.net/?retryWrites=true&w=majority&appName=mahinul-islam`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db('VisaPortDb');
const userCollection = database.collection('users');
const visaCollection = database.collection('visas');
const applicationCollection = database.collection('applications');
async function run() {
  try {
    // Routes
    app.get('/', (req, res) => {
      res.send(`
    <h1>Welcome to Our VisaPortal!</h1>
  `);
    });

    // Users
    app.post('/Users', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    app.get('/Users', async (req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    });
    // Visas
    app.post('/Visa', async (req, res) => {
      const visa = req.body;
      const result = await visaCollection.insertOne(visa);
      res.send(result);
    });
    app.get('/Visa', async (req, res) => {
      const cursor = visaCollection.find();
      const visas = await cursor.toArray();
      res.send(visas);
    });
    app.get('/Visa/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const visa = await visaCollection.findOne(query);
      res.send(visa);
    });
    app.put('/Visa/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const visa = req.body;
      console.log(visa);
      const update = { $set: visa };
      const result = await visaCollection.updateOne(query, update);
      res.send(result);
    });
    app.delete('/Visa/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visaCollection.deleteOne(query);
      res.send(result);
    });
    // Applications
    app.post('/Applications', async (req, res) => {
      const application = req.body;
      const existingApplication = await applicationCollection.findOne({
        visaId: application.visaId,
        email: application.email,
      });
      // If an application already exists, return an error
      if (existingApplication) {
        console.log('Application already exists.');
        return res.status(400).send({ message: 'Application already exists.' });
      }
      const result = await applicationCollection.insertOne(application);
      res.send(result);
    });
    app.get('/Applications', async (req, res) => {
      const cursor = applicationCollection.find();
      const applications = await cursor.toArray();
      res.send(applications);
    });
    app.get('/Applications/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const application = await applicationCollection.findOne(query);
      res.send(application);
    });
    app.delete('/Applications/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await applicationCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
