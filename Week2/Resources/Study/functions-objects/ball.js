var length = data.length;

// you work goes here
// -----------------------
var ball;
ball = create();

var x = 0;
var y = 0;
var counter = 0;
var data = [];

create(0,0,painting[400]);
create(15,0,painting[401]);
create(30,0,painting[402]);
create(45,0,painting[403]);
create(60,0,painting[404]);
create(75,0,painting[405]);
create(90,0,painting[406]);
create(105,0,painting[407]);

for(var j=0; j<81; j++){
    y = j*15;
    for(var i=0; i<53; i++){
        x = i*15;
        create(x,y,painting[counter]);
        data.push({x:x,y:y,color:painting[counter]});
        counter++;
    }
}    