var Client = require("mpp-client");
var MPP = new Client("wss://www.multiplayerpiano.com:443");
var defaultRoom = "Cocaine";
MPP.setChannel (defaultRoom);
MPP.start();
