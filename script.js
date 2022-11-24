//** TYPE YOUR CODE HERE!!**//
let sym = 6;
let angle = 360 / sym;


function setup() {
  createCanvas(650, 650)
  background("purple");
  angleMode(DEGREES);

}
  
//** TYPE YOUR CODE HERE!!**//

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    //** TYPE YOUR CODE HERE!!**//    
    if (mouseIsPressed){

      for (let pixal = 0; pixal < sym; pixal++) {
        rotate(angle);

        let lightblue = color(3, 252, 240)
        let yellow = color(219, 252, 3)
      
        const step = map (pixal, 0, sym, 0 , 1);
        stroke(lerpColor(lightblue, yellow, step));

        //** TYPE YOUR CODE HERE!!**//
        
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}