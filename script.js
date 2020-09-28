
window.addEventListener("load", init);
function init() {
    //Make stage
    const stage = new createjs.Stage("Canvas");
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
    let frameCount = 0;
    let bulletList = [];
    let background = new createjs.Shape();
    background.graphics.beginFill("#000000");
    background.graphics.drawRect(0, 0, stage.canvas.width, stage.canvas.height);
    stage.addChild(background);
    let player = new createjs.Bitmap("uchusen.png");
    stage.mouseX = 165;
    stage.mouseY = 600;
    player.x = 165;
    player.y = 600;
    stage.addChild(player);
    stage.update();
    function update() {
        function movePlayer() {
            player.x += (stage.mouseX - player.x) * 0.1;
            player.y += (stage.mouseY - player.y) * 0.1;
            if (player.x >= stage.canvas.width - 20) {

                player.x = stage.canvas.width - 20;
            }
            if (player.y >= stage.canvas.height - 20) {

                player.y = stage.canvas.height - 20;
            }
        }
        function shootBullet(){
            let bullet = new createjs.Shape();
            bullet.graphics.beginFill("white").drawCircle(0,0,3);
            bullet.x = player.x+16;
            bullet.y = player.y;
            stage.addChild(bullet);
            bulletList.push(bullet);
        }
        frameCount++;
        movePlayer();
        if(frameCount % 20 == 0){
            shootBullet();
        }
        for(let i = 0;i < bulletList.length;i++){
            bulletList[i].y -= 10;
            if(bulletList[i].y <0){
                stage.removeChild(bulletList[i]);
                bulletList.splice(i,1);
            }
        }
        stage.update();
    }
}
