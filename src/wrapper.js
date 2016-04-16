//do something special before/after invoking a function
import {logTime} from './lib/utils';

function perfWrapper(fn){
  return (...args) => {
    logTime();
    fn.apply(this, args);
    logTime();
  }
}

function fuck(...args){
  console.log(`fuck ${args}`)
}

let fuckPerf = perfWrapper(fuck);
fuckPerf("dogger");