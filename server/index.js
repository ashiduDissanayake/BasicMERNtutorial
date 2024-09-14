const express = require('express');
const app = express();

const db = require('./models/index');

app.use(express.json());

// Routers
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    })
});


