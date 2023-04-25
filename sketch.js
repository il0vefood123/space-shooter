var bg,bgImg,player,playerImg,alien1,alien2,alien1Img,alien2Img,ufo,ufoImg,bulletImg








 function preload(){
    bgImg = loadImage("wallpaper.jpg")
    playerImg=loadImage("player.png")
    alien1Img=loadImage("alien.png")
    alien2Img=loadImage("alien_on_spaceship.png")
    ufoImg=loadImage("ufo.png")
    bulletImg=loadImage("bullet.png")
}





 function setup(){
    createCanvas(1500,900)
    bg=createSprite(750,450)
    bg.addImage(bgImg)

    player=createSprite(750,810)
    player.addImage(playerImg)
    player.scale=0.3

   


}


 function draw(){

 background('BLACK')
 drawSprites();

 if(keyDown(LEFT_ARROW)){
    player.x = player.x-5

}

 if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5

}

 if(keyWentDown("space")){
   shoot()

}

}

 function shoot(){

    var bullet=createSprite(player.x,player.y,10,20)
    bullet.addImage(bulletImg)
    bullet.scale=0.02
    bullet.velocityY= -30






}


