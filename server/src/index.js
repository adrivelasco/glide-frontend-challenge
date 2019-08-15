const express = require('express');
const path = require('path');
const bodyParser = require('bodyParser');
const httpStatus = require('http-status');
const cors = require('cors');
const requestPromise = require('request-promise');

const app = express();
const port = process.env.PORT || 3000;
const employeesApi =
'https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/employees', async(req, res, next) => {
  const options = {
    method: 'GET',
    uri: employeesApi,
    json: true,
    resolveWithFullResponse: true
  };
  try {
    const data = await requestPromise(options);
    return res.status(200).json(data);
  } catch(error) {
    next(error)
  }
});

// Error handler
app.use((err, _req, res, next) => {
  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    statusCode,
    message: err.message ? err.message : err
  });
});

if(process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));