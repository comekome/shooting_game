
window.addEventListener("load", init);
function init() {
    //Make stage
    const stage = new createjs.Stage("myCanvas");
    //Support touch device
    if (createjs.Touch.isSupported() == true) {
        createjs.Touch.enable(stage);
    }
    /*//Window resizing process
    window.addEventListener("resize", handleResize);
    handleResize();
    */
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", update);

    function handleResize() {
        const w = window.innerWidth;
        const h = window.innerWidth;
        stage.canvas.width = w;
        stage.canvas.height = h;
        stage.update();
    }

    let background = new createjs.Shape();
    background.graphics.beginFill("#000000");
    background.graphics.drawRect(0, 0, stage.canvas.width, stage.canvas.height);
    stage.addChild(background);
    let player = new createjs.Bitmap("uchusen.png");
    player.x = 165;
    player.y = 600;
    stage.addChild(player);
    stage.update();
    function update() {
        player.x += (stage.mouseX - player.x) * 0.1;
        player.y += (stage.mouseY - player.y) * 0.1;
        stage.update();
    }
}
