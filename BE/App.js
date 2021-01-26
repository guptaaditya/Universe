const express=require('express');
const app=express();
const PORT =  process.env.PORT || 4000;

app.use(express.json());
app.use('/api/timezone', require('./routes/timeZones'));

app.listen(PORT,() => {
    console.log(`Server is listening at ${PORT}`)
})