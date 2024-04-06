const express = require('express');
const cors = require('cors')
const authRoute = require('./router/auth-router');
const contactRoute=require('./router/contact-router');
const app = express();
const port = 3000;
const connectDb=require('./utlis/db');
const errorMiddleware = require('./middleware/error-midddleware');

//tackle cors problem
const corsOptions = {
  origin: 'http://localhost:5173',
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD" ,
  Credential:true
}


app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/auth",authRoute);

app.use("/api/form",contactRoute);

app.use(errorMiddleware);

connectDb().then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
