var canvas, backgroundImage;
var gameState = "PLAY";
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
  thootless1 = loadAnimation('0.gif', '1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', '9.gif', '10.gif', '11.gif')
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
  bg2 = loadImage("higame.jpg");
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

  sword = loadImage("sword.png");
  rock = loadImage("rock.png");
  cactus = loadImage("cactus.png");
  boomerang = loadAnimation("boomrang1.png", "boomrang2.png", "boomrang3.png", "boomrang4.png");
  fire = loadAnimation("fire1.png", "fire5.png", "fire2.png");
  gem = loadImage("gem.png");
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.gif")
  winner1 = loadImage("winner.png")
  over = loadImage("game over.png")
}
function setup() {
  canvas = createCanvas(displayWidth / 2, displayHeight / 2);
  winner = createSprite(displayWidth / 4, displayHeight / 4)
  winner.addImage(winner1)
  winner.visible = false
  winner.scale = 0.2
  over1 = createSprite(displayWidth / 4, displayHeight / 4)
  over1.addImage(over)
  over1.visible = false
  over1.scale = 0.15
  backgroundSprite = createSprite(displayWidth / 4, displayHeight / 4)
  backgroundSprite.addImage(bg2);
  backgroundSprite.scale = 2.8
  backgroundSprite.velocityX = -3;
  backgroundSprite.depth = -1;

  runner = createSprite(50, (displayHeight / 2) - 20, 25, 40);
  runner.depth = 4;
  runner.addAnimation('run', redrunningAnimation);
  runner.scale = 1.5;
  runner.setCollider("circle", 5, 12, 2);
  runner.debug = true;
  invisibleGround = createSprite(displayWidth / 4, displayHeight / 2, displayWidth / 2, 10);
  invisibleGround.visible = false;

  cactusGroup = new Group();
  fireGroup = new Group();
  boomrang1Group = new Group();
  cloudsGroup = new Group();
  fruit1Group = new Group();
}

function draw() {
  background('white')
  if (gameState === "PLAY") {
    runner.velocityY = 2;
    console.log(backgroundSprite.x)
    if (backgroundSprite.x < 220) {
      backgroundSprite.x = displayWidth / 4;
    }

    runner.collide(invisibleGround);
    if (keyDown('b')) {
      spawnBoomrang();
    }
    spawnFireBall();
    spawnClouds();
    spawnFruit1();
    spawnCactus();
    if (runner.isTouching(cactusGroup) || runner.isTouching(fireGroup) || runner.isTouching(cloudsGroup)) {
      if (runner.scale > 2) {
        runner.scale = runner.scale - 0.1
      }
      else {
        over1.visible = true
        runner.velocityX = 0
        runner.velocityY = 0
        fireGroup.setVelocityXEach(0);
        fireGroup.setVelocityYEach(0);
        cactusGroup.setVelocityXEach(0);
        cactusGroup.setVelocityYEach(0);
        cloudsGroup.setVelocityYEach(0);
        cloudsGroup.setVelocityXEach(0);
        boomrang1Group.setVelocityXEach(0);
        fruit1Group.setVelocityYEach(0);
        backgroundSprite.velocityX = 0
        gameState = "END"

      }

    }

    if (boomrang1Group.isTouching(fireGroup)) {
      fireGroup.destroyEach();
      score = score + 1
    }
    if (score % 10 === 0 && score > 0) {
      runner.scale = runner.scale + 0.01
    }
    if (boomrang1Group.isTouching(cloudsGroup)) {
      cloudsGroup.destroyEach();
      score = score + 1
    }

    if (score > 10) {
      runner.velocityX = 0
      runner.velocityY = 0
      fireGroup.setVelocityXEach(0);
      fireGroup.setVelocityYEach(0);
      cactusGroup.setVelocityXEach(0);
      cactusGroup.setVelocityYEach(0);
      cloudsGroup.setVelocityYEach(0);
      cloudsGroup.setVelocityXEach(0);
      boomrang1Group.setVelocityXEach(0);
      fruit1Group.setVelocityYEach(0);
      backgroundSprite.velocityX = 0
      gameState = "END"
      winner.visible = true
    }

    if (keyDown("Space")) {
      runner.velocityY = -3

    }
    runner.y = runner.y + 0.5
  }
  function spawnClouds() {
    if (frameCount % 60 === 0) {
      thootless = createSprite(600, 100, 40, 10);
      thootless.y = Math.round(random(10, 200));
      cloudsGroup.add(thootless);
      thootless.addAnimation("flying", thootless1)
      thootless.scale = 0.2;
      thootless.velocityX = -2;
      thootless.depth = runner.depth;

    }

  }

  function spawnFruit1() {
    frame = Math.round(random(150, 250));
    if (frameCount % frame === 0) {
      Fruit1 = createSprite(600, 100, 40, 10);
      Fruit1.y = Math.round(random(80, 200));
      random1 = Math.round(random(1, 3));
      fruit1Group.add(Fruit1);
      switch (random1) {
        case 1: Fruit1.addImage(fruit1)
          Fruit1.scale = 0.02;
          break
        case 2: Fruit1.addImage(fruit2)
          Fruit1.scale = 0.03;
          break
        case 3: Fruit1.addImage(fruit3)
          Fruit1.scale = 0.05;
          break
      }

      Fruit1.velocityX = -2;
      Fruit1.depth = runner.depth;

    }

  }
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
function spawnBoomrang() {
  var posX = runner.x
  var posY = runner.y
  var boomrang1 = createSprite(posX, posY, 10, 10)
  boomrang1.addAnimation("flying", boomerang);
  boomrang1.velocityX = 2
  boomrang1.scale = 0.04
  boomrang1Group.add(boomrang1);
}

