var gato, imgGato, imgGato2, imgGato3; 
var rato, imgRato, imgRato2; 
//var jardim, imgJardim; 

function preload() {
    //load the images here
    imgGato = loadImage ("./images/cat1.png"); 
    imgGato2 = loadAnimation("./images/cat2.png", "./images/cat3.png"); 
    imgGato3 = loadImage ("./images/cat4.png"); 
    imgRato = loadImage ("./images/mouse1.png"); 
    imgRato2 = loadAnimation ( "./images/mouse2.png", "./images/mouse3.png"); 
    imgRato3 = loadImage ("./images/mouse4.png"); 
    imgJardim = loadImage ("./images/garden.png"); 

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    jardim = createSprite (10000,400, 900,900); 
    jardim.addImage ("jardim", imgJardim); 

    gato = createSprite (870,600); 
    gato.addImage ("gatoSentado", imgGato); 
    gato.scale = 0.2; 
    gato.velocityX = 0;  

    rato = createSprite (370,600); 
    rato.addImage ("ratoProvocando", imgRato); 
    rato.scale = 0.2; 


}

function draw() {

    background(imgJardim);
    //Write condition here to evalute if tom and jerry collide
      
    if (gato.x - rato.x < (gato.width - rato.width)/2){
        gato.addImage ("gatoFinal", imgGato3); 
        gato.changeImage ("gatoFinal"); 
        gato.velocityX = 0; 
        gato.x = 500; 
        gato.shapeColor = "red"; 
        rato.addImage ("ratoNormal", imgRato3); 
        rato.changeImage ("ratoNormal"); 
    } 

    if (keyDown (LEFT_ARROW)){
        gato.velocityX = -5; 
        gato.addAnimation("gatoAndando", imgGato2);
        gato.changeAnimation("gatoAndando");
        
        rato.addAnimation("ratoProvocando", imgRato2);
        rato.changeAnimation("ratoProvocando"); 
        rato.frameDelay = 20;
    }
   

    drawSprites();
}
