import {noop, log, compose, toString, fuck, push, pull, hit} from './lib/utils';


const middleware1 = (req, res, next) => {
  log(`fuck dogger 1`);
  next()
}

const middleware2 = (req, res, next) => {
  log(`fuck dogger 2`);
  next()
}

const middleware3 = (req, res, next) => {
  log(`fuck dogger 3`);
  next()
}

const middlewares = [middleware1, middleware2, middleware3];

let res = {};
let req = {};

function applyMiddlewares(middlewares){
  return flow(middlewares);
}

function flow(funcs){
  return function (req, res){
    return funcs.reduceRight((next, func) => {
      return () => {
        func(req, res, next)
      }
    }, noop);
  }
}
let chain = applyMiddlewares(middlewares)(req, res);
chain()
