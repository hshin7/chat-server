const express = require('express');

const app = express();



app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


const mc =  require('./controllers/messages_controller');

app.post('api/messages', mc.create);
app.get('api/messages', mc.read);
app.delete('api/messages/:id', mc.delete);
app.put('api/messages/:id', mc.update);

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});