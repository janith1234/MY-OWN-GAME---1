var canvas, backgroundImage;

var gameState = "serve";
var score = 0;

function preload() {
  redjumpingAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump07.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump08.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump09.png"
  );
  redrunningAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run07.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run08.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/run09.png"
  );
  purplejumpingAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump07.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump08.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump09.png"
  );
  purplerunningAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run07.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run08.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run09.png"
  );
  gameBackground1 = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/defaultBackground.png"
  );
  platformBackground1 = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/defaultPlatform.png"
  );
  gameBackground2 = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertBackground.png"
  );
  platformBackground2 = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertPlatform.png"
  );
  gameOverMusic = loadSound(
    "https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3"
  );
  jumpSound = loadSound(
    "https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3"
  );

  sword = loadImage("./images/sword.png");
  rock = loadImage("./images/rock.png");
  cactus = loadImage("./images/cactus.png");
  boomerang = loadAnimation("./images/boomrang1.png", "./images/boomrang2.png", "./images/boomrang3.png", "./images/boomrang4.png");
  fire = loadAnimation("./images/fire1.png", "./images/fire5.png", "./images/fire2.png");

}
function setup() {
  canvas = createCanvas(displayWidth / 2, displayHeight / 2);

  backgroundSprite = createSprite(displayWidth / 4, displayHeight / 4)
  backgroundSprite.addImage(gameBackground1);
  backgroundSprite.velocityX = -3;
  backgroundSprite.depth = -1;

  runner = createSprite(50, (displayHeight / 2) - 20, 25, 40);
  runner.depth = 4;
  runner.addAnimation('run', redrunningAnimation);

  runner.scale = 1.5;

  invisibleGround = createSprite(displayWidth / 4, displayHeight / 2, displayWidth / 2, 10);
  invisibleGround.visible = false;

  cactusGroup = new Group();
  
  fireGroup = new Group();
}

function draw() {
  background('white')

  runner.velocityY = 2;
  console.log(backgroundSprite.x)
  if (backgroundSprite.x < 220) {
    backgroundSprite.x = displayWidth / 4;
  }
  runner.collide(invisibleGround);
  spawnFireBall();
  spawnCactus();


  drawSprites();
  text("score: " + score, displayWidth / 4, 20)
}

function spawnCactus() {

  var pos = (Math.round(random(60, 300)));
  console.log("cac" + pos)
  if (frameCount % pos === 0) {
    cactusSprite = createSprite(displayWidth / 2, displayHeight / 2 - 30, 10, 50);
    cactusSprite.addImage(cactus);
    cactusSprite.velocityX = -6
    cactusSprite.scale = 0.04;
    cactusGroup.add(cactusSprite);
  }
}

function spawnFireBall() {
  var pos = (Math.round(random(60, 300)));
  console.log("fire" + pos);
  if (frameCount % pos === 0) {
    fireSprite = createSprite((Math.round(random(200, displayWidth / 2))), 10, 10, 50);
    fireSprite.addAnimation("throw", fire);
    firespeed = Math.round(random(3, 9));
    fireFall = Math.round(random(3, 9));
    fireSprite.velocityX = -firespeed
    fireSprite.velocityY = fireFall;
    fireSprite.scale = 0.01;
    console.log("firex" + fireSprite.y);
    fireGroup.add(fireSprite);

  }
}
