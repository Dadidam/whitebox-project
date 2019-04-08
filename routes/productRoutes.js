module.exports = app => {
  app.get('/api/products', (req, res) => {
    res.json({ test: true });
  });
};
