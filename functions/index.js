const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HtQ3XJvZyfZIFkk6WQ9HiaKlxTXYVp9IRGuZPOel7pDMHgN1T6600hqm65T88RBYL6ozaaTjK1zMxbO896hDY5d00ocInYXGp')

// API

// - APP config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received for this amount >', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command 
exports.api = functions.https.onRequest(app)