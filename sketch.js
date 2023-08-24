function setup() {
    createCanvas(1920, 1080);
    background(0)
}

function draw() {
    noStroke();

    if(keyIsPressed){//if a key is pressed
        if(key == 'r'){//if that key is r
            fill(255,0,0)//change the fill to red
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'g'){//if that key is g
            fill(0,128,0)//change the fill to green
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'l'){//if that key is l
            fill(0,255,0)//change the fill to lime
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'b'){//if that key is b
            fill(0,0,255)//change the fill to blue
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'w'){//if that key is w
            fill(255,255,255)//change the fill to white
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'p'){//if that key is p
            fill(128,0,128)//change the fill to purple
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'o'){//if that key is o
            fill(255,165,0)//change the fill to orange
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'c'){//if that key is c
            fill(0,255,255)//change the fill to cyan
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'y'){//if that key is y
            fill(255,255,0)//change the fill to yellow
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'm'){//if that key is m
            fill(128,0,0)//change the fill to maroone
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 't'){//if that key is t
            fill(210,180,140)//change the fill to tan
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 's'){//if that key is s
            fill(160,82,45)//change the fill to brown
        }else{//if no key is pressed
            //don't add a fill
        } 
    }
  if(keyIsPressed){//if a key is pressed
        if(key == 'e'){//if that key is e
            fill(0)//change the fill to black
        }else{//if no key is pressed
            //don't add a fill
        } 
    }

    //only draw when the mouse is pressed
  sizeX = 20
  sizeY = 20
  
  if(key == '-'){
      sizeX = sizeX - 10
      sizeY = sizeY - 10
  }
  
  if(key == '+'){
      sizeX = sizeX + 10
      sizeY = sizeY + 10     
  }
  
  if(mouseIsPressed){
        ellipse(mouseX,mouseY,sizeX,sizeY)
    }
}
