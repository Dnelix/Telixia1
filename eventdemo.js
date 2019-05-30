//This shows how an object can fire an event
var fs = require('fs');
var rs = fs.createReadStream('./demofile.html');
rs.on('open', function () {
  console.log('The file is open');
});

//Firing and responding to an event using the node.js built-in events module
//STEP 1: Require the event module and create the event emitter instance
var events = require('events');
var evtEmt = new events.EventEmitter();

//STEP 2: Create a function that will run when the event is triggered (i.e. event handler)
var myEventHandler = function(){
    console.log('I hear a scream!!!');
}

//STEP 3: Assign the Event Handler to an event
evtEmt.on("scream", myEventHandler); //Scream is the name of the event. Now, myEventHandler is waiting for a scream event

//STEP 4: Fire the scream event using the emit() method.
evtEmt.emit('scream');