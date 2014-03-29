// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  window.game = game;
  window.states = [];
  game.inputManager.on("move", function(){
    window.states.push(game.storageManager.getGameState());
  });
  window.undo = function() {
    var state = window.states.pop();
    if (state) {
    	game.storageManager.setGameState(state);
    	game.setup();
    	game.actuator.continueGame(); // clear loose message
    }
  };
});
