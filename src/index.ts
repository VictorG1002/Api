import express from 'express';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017').then(() => {

  console.log('MongoDB connected');

  const app = express();

  const port = 3002;

  app.listen(port, () => {
    console.log(`Server is running 👺 on http://localhost:${port}`);
  });

}).catch((err) => console.log(err));


