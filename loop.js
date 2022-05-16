// node myFile.js

myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port)
  // Check three: Any pedning long running operations? (Like fs module)
}

while(shouldContinue()) {

}


// exit back to terminal