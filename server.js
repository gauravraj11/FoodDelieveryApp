const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const dishStaticRouter = require("./routes/dishes.router.js");
const userRouter = require("./routes/users.router.js");
const dishDBRouter = require("./routes/dishesDB.router.js");

const authRouter = require("./routes/auth.router");

const app = express();
const db = require("./db.js");
app.use(cors());


const port = 8000;
app.use(express.json());
app.get('/', (req, res) => res.send('Server is working !' + port));




app.use('/api/dishes' , dishStaticRouter);

app.use('/getusers' , userRouter);

app.use('/getdishes' , dishDBRouter);

app.use("/api/auth", authRouter);



app.listen(port, () => console.log(`Food app is listening on port ${port}!`))