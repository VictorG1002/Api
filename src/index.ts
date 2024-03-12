import express from 'express';

import path from 'node:path';

import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3002;


    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    console.log('MongoDB connected');

    app.listen(port, () => {
      console.log(`Server is running 👺 on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
