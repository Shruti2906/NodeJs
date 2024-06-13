console.log("Hello");

const Student = require("./another");
console.log(Student);
const os = require('node:os');

console.log("os ",os.freemem());
console.log("homedir: ",os.homedir());
console.log("hostname::",os.hostname);
console.log("os.platform:",os.platform);
console.log("getpriority", os.getPriority(2100))
console.log("getpriority", os.type())
