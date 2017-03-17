var MyCan;
var IsMouse = false;
var ClickX = new Array();
var ClickY = new Array();
var ClickDrag = new Array();

var IsDebug = false;
Util.Start(1,Setup);
Util.Using("Drawing");

function Setup() {
    MyCan = document.getElementById('MyCanvas');
    if(IsDebug)console.info("Binding Event Handlers...");
    var self = this;
    MyCan.addEventListener('mouseup',self.MU);
    MyCan.addEventListener('mousedown',self.MD);
    MyCan.addEventListener('onmouseout',self.MO);
    MyCan.addEventListener('mousemove',self.MM);
    if(IsDebug)console.info("Done Binding!");
    if(IsDebug)console.log(self);
    if(IsDebug)console.info("Initializing UtilsJs Draw2D");
    Util.Drawing.InitDraw2d(MyCan);
    if(IsDebug)console.info("Done!");
    if(IsDebug)console.info("Setting Up Canvas");
    MyCan.C2D.canvas.height = window.innerHeight;
    MyCan.C2D.canvas.width = window.innerWidth;
    if(IsDebug)console.info("Done!");
    if(IsDebug)console.info("Setting Up UtilsJs Draw2D");
    MyCan.color("#df4b26");
    if(IsDebug)console.info("Done!");
}

function MU(e) {
    if(IsDebug)console.log("MU");
    IsMouse = false;
    ClickX = new Array();
    ClickY = new Array();
    ClickDrag = new Array();
}

function MD(e) {
    if(IsDebug)console.log("MD");
    IsMouse = true;
    //console.log(e,this.offsetTop)
    addClick(e.clientX - this.offsetLeft, e.clientY - this.offsetTop, false);
    redraw();
}

function MO(e) {
    if(IsDebug)console.log("MO");
    IsMouse = false;

}

function MM(e){

    if(IsMouse){
        addClick(e.clientX - this.offsetLeft, e.clientY - this.offsetTop, true);
        redraw();
        if(IsDebug)console.log("MM");
    }
}

function addClick(x, y, drag) {
    //console.log(x,y)
    ClickX.push(x);
    ClickY.push(y);
    ClickDrag.push(drag)
}

function redraw() {
    //console.log(ClickX)
    //console.log(ClickY)
      for(var i=0; i < ClickX.length; i++) {
    if(ClickDrag[i] && i){
      MyCan.line(ClickX[i], ClickY[i]);
     }else{
       MyCan.line(ClickX[i], ClickY[i]);
     }
     MyCan.line(ClickX[i], ClickY[i]);
  }
  MyCan.C2D.lineJoin = "round";
  MyCan.C2D.lineWidth = 10;
  MyCan.drawlines();
  }
