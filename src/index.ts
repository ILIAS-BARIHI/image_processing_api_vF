
import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';
import path from 'path';
const app = express();
const port = 3000;
app.get(
  '/',
  logger,
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
);
app.use('/image', logger, routes);
app.listen(port, () => {
  console.log('Server_starte_at_localhost:' + port);
});
export default app;
