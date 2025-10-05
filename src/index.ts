import express, { Request, Response } from 'express';

// Create a new express application instance
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World2!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
