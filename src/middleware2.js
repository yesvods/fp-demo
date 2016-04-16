import {noop, log, compose, toString, fuck, push, pull, hit} from './lib/utils';

const md1 = o => {
  let res = hit(o);
  log(res);
  return res;
}
const md2 = o => {
  let res = pull(o);
  log(res);
  return res;
}
const md3 = o => {
  let res = fuck(o);
  log(res);
  return res;
}

const mds = [md1, md2, md3];

compose(...mds.reverse())('dogger');