document.addEventListener("keydown", function(event) {
   let letra = event.key;
    let audioA = new Audio("piano_keys/" + letra + ".mp3");

    if (event.code === "KeyA" || event.code === "KeyS" || event.code === "KeyD" ||
        event.code === "KeyF" || event.code === "KeyG" || event.code === "KeyH" ||
        event.code === "KeyJ" || event.code === "KeyW" || event.code === "KeyE" ||
        event.code === "KeyT" || event.code === "KeyY" || event.code === "KeyU") {
       audioA.play();

        //console.log("The '" + event.key + "' key is pressed.");
    } else {
        console.log("'" + letra + "' is not a piano key.");
    }
});