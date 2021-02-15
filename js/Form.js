class Form {

  constructor() {
    input = createInput("Name");
    button = createButton('Play');
   greeting = createElement('h2');
  }
  hide(){
    greeting.hide();
   button.hide();
    input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(()=>{
      input.hide();
      button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      greeting.html("Hello " + player.name)
      greeting.position(130, 100);
    });

  }
}
