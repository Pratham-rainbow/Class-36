class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game.");
        title.position(300, 100);
        var input = createInput("Name");
        var button = createButton("PLAY");
        var greeting = createElement("h3");
        input.position(310, 200);
        button.position(320, 240);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello, " + name);
            greeting.position(320, 240);
        });
        }
}