"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
const map_1 = require("./map");
const forEach_1 = __importDefault(require("./forEach"));
const filter_1 = __importDefault(require("./filter"));
const slice_1 = __importDefault(require("./slice"));
console.log('Try npm run lint/fix!');
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = { am: 'I tabbed?' };
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples
console.log("map Function:");
const numbers = [4, 13, 3, 7, 8, 444, 19, 67, 23];
console.log((0, map_1.squared)(numbers));

console.log("\nforEach Function:");
console.log(forEach_1.default);

console.log("\nfilter Function:");
console.log(filter_1.default);

console.log("\nslice Function:");
console.log(slice_1.default);
