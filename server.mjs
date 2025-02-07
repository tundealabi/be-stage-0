import http from 'http';

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // Handle other requests
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        email: 'tundealabi4780@gmail.com',
        current_datetime: new Date().toISOString().split('.').at(0) + 'Z',
        github_url: 'https://github.com/tundealabi/be-stage-0',
      })
    );
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 4300;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
