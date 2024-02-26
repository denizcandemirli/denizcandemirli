const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


/*
const connectDB = require('./server/config/db');
//Connect to DB

connectDB();
*/
const app = express();
const PORT = 3000 || process.env.PORT;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/public/js/scripts.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'public', 'js', 'scripts.js'));
});

app.get('/documents/ifcJS/ifcimplement.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'public', 'js', 'scripts.js'));
});

// Define routes for different HTML pages
app.use('/', require('./server/routes/main'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/index.html'));
});
app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/index.html'));
  res.send('POST request to the homepage');
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/about.html'));
});

app.post('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/about.html'));
  res.send('POST request to the homepage');
});

app.get('/gisdev', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/gisdev.html'));
});
app.post('/gisdev', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/gisdev.html'));
  res.send('POST request to the homepage');
});
app.get('/bimdev', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/bimdev.html'));
});
app.post('/bimdev', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/bimdev.html'));
  res.send('POST request to the homepage');

});
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/form.html'));
});
app.post('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'documents/form.html'));
  res.send('POST request to the homepage');
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/contact.html'));
  });
  app.post('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/contact.html'));
    res.send('POST request to the homepage');
  });

app.use(express.static('documents/ifcJS'));

/*app.get('/documents/ifcJS/ifcimplement.js', (req, res) => {
  res.set('Content-Type', 'module');
  res.sendFile(path.join(__dirname, 'documents', 'ifcJS', 'ifcimplement.js'));
});*/




  //ERROR OCCUR ON THIS SECTION FOR IFC WEB VIEWER
  app.get('/bimdev1', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/bimdev1.html'));
  });


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Define schema
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

// Define model
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));


// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a new document using the Mongoose model
  const formData = new FormData({
    name: name,
    email: email,
    phone: phone,
    message: message
  });

  // Save the document to MongoDB
  formData.save()
    .then(() => res.send('Form submitted successfully'))
    .catch(err => {
      console.error('Error saving to MongoDB', err);
      res.status(500).send('Internal Server Error');
    });
});


  
app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}`);
});
