$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 650, 150, 10);
    createPlatform(500, 600, 150, 10);
    createPlatform(700, 500, 150, 10);
    createPlatform(450, 400, 150, 10);

    createPlatform(900, 400, 150, 10);
    createPlatform(1200, 350, 150, 10);

    // TODO 3 - Create Collectables
    createCollectable("db", 325, 625);
    createCollectable("steve", 750, 450);
    createCollectable("kennedi", 1250, 300);
    // TODO 4 - Create Cannons

    createCannon("left", 300, 5000);
    createCannon("top", 650, 2000);
    createCannon("top", 425, 2000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  } 

  registerSetup(setup);
});
