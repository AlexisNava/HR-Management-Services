function root(req, res) {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    message: 'HR Management Services is running',
  });
}

module.exports = root;
