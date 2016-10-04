var array = [];

function setup(){
  createCanvas(720,360);
  
  for( var i=0; i< width; i++){
    var amount = map(i, 0 , width, 0, PI);
    array[i] = abs(cos(amount));
  }
   background(255);
   noLoop();
  
}

function draw(){
  
  var y = 0;
  var y1 = height/3;
  for( var =0; i< width; i+3){
    stroke(array[i] = 255);
    line(i, y, i, y1);
  }
  
  y = y1;
  y1 = y + y;
  for( var i = 0; i <width; i+3){
    stroke(array[i]*255/4);
    line(i,y,i,y1);
  }
  
  y = y1;
  y1 = height;
  for(var i = 0; i<width; i+=3){
    stroke(255-array[i]*255);
    line(i,y,i,y1);
  }
}
    
  }
  
  ellipse(x,y,10,10);
  
}