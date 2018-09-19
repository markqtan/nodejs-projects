const axios = require('axios');
axios.get('http://localhost:3000')
.then(function(res){
    setTimeout(() => {
        console.log(res.data);
    }, 1010);
});
axios.get('http://localhost:3000/json')
.then(function(res){
    setTimeout(() => {
        console.log(res.data);
    }, 1000);
});