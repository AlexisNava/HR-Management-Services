function notFound(req, res) {
  const { host, originalUrl } = req;

  res.status(404).json({
    status: 404,
    statusCode: 'Not Found',
    data: null,
    message: `Not Found the resource: http://${host}/${originalUrl}`,
  });
}

module.exports = notFound;
