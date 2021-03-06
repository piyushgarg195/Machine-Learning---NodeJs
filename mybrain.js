const brain = require('brain.js');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

module.exports = function(string){
    this.string = string;
    console.log('Class',string)
    const network = new brain.recurrent.LSTM();
    const trainingdata = [
    
        {
            text:[
                'cash',
                'Furniture'
            ],
            output:'Real Account'
        },
        {
            text:[
                'Cash',
                'Interest'
            ],
            output:'Nominal Account'
        },
        {
            text:[
                'cash',
                'interest'
            ],
            output:'Nominal Account'
        },

        
        
        
    ];
     
    
    const train = trainingdata.map(item=>({
        input:item.text,
        output:item.output
    }));
    network.train(train,{
        iterations:2000
    });

    
    return network.run(string);
    
   
   
    
    
}

