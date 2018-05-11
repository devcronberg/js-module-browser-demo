import { doStuff1 } from "./lib1.js";
import mylog from "./lib2.js";
import { Logger } from "./lib3.js";

doStuff1();
mylog("test2");

let l = new Logger();
l.log("test3");
