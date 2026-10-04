import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Server } from 'socket.io';
import http from 'http';
import { initGameServer } from './src/server/game.js';

async function startServer() {
  const app = express();
  const server = http.createServer(app);
  
  // Setup Socket.IO
  const io = new Server(server, { 
    cors: { origin: '*' }
  });

  // Initialize Game Logic
  initGameServer(io);

  // Set up Vite Middleware for serving frontend
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  
  app.use(vite.middlewares);

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
