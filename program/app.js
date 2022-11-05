const express = require('express');
var bodyParser = require('body-parser')
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    var amountX = parseFloat(req.body.amount);
    const coins = [50, 20, 5, 2, 1, 0.5, 0.2, 0.1]
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    var resultText = "You need ";
    for (let i = 0; i < coins.length; i++) {
        while (amountX - coins[i] >= 0) {
            amountX = amountX - coins[i];
            result[i] = result[i] + 1;
        }  
        if (i == 0){
            resultText = resultText.concat(`${result[i]}  banknotes of ${coins[i]}`)
            
        } else   
        {
            resultText = resultText.concat(`   ,${result[i]} of ${coins[i]}    `)
       
        } 
    }
    
     
    res.status(200).send(resultText );
});

app.listen(5000);