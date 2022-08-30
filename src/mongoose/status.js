const mongoose=  require('mongoose');

mongoose.connect('mongodb://localhost/nodejsProject')
.then(x=> console.log('MongoDB status: Connected'))
.catch(x=> console.log('MongoDB status: Disconnected'));