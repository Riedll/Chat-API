require("dotenv").config(); 2.9k (gz)
const app = require("../src/api");

app.use((req, res, next)=>{
    next();
});
console.log(process.env.API_PORT);
let port = process.env.API_PORT||3001;
app.listen(port);

console.log(`listen on ${port}`);