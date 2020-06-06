const express=require('express');
const mongoose=require('mongoose');

const app=express();
const path=require('path')
const config=require('config')



app.use(express.json());
const db=config.get('mongoURI');

mongoose.connect(db,{useNewUrlParser:true,
    useCreateIndex: true})
.then(()=> console.log('Mongodb connected'))
.catch(err=>console.log(err));

app.use('/api/items',require('./routes/api/Items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));

    })
}

const port=process.env.PORT||4000

app.listen(port,()=>console.log(`server started at ${port}`));
