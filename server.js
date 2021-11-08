const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "public");
let port = process.env.PORT || 5000 
 app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "hindex.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "login.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "signup.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(port, () =>{
     console.log("listening on ",port);
})