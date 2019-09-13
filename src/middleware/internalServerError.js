function internalServerError(error, req, res) {
  res.status(500).json({
    statusCode: 500,
    status: 'Internal Server Error',
    data: null,
    errorMessage: error.message || 'Internal Server Error',
  });
}

module.exports = internalServerError;
