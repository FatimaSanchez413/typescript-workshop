import {squared} from "./map";
import fruits from './forEach';
import filteredWords from './filter';
import slicedMessage from './slice';
console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
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

const numbers = [2,4,6,8];

console.log(squared(numbers));
console.log(fruits);
console.log(filteredWords);
console.log(slicedMessage);
