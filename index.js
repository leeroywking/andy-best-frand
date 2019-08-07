let express = require('express');

let app = express();

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on ', PORT)
})

app.get('/', (req,res) =>{
    res.status(200).send('Hunter is number 2 best frand')
});

