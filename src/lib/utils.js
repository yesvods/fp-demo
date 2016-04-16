export const noop = new Function();
export const log = console.log.bind(console) || noop;
export const toString = Object.prototype.toString;

export function compose(...funcs) {
  return (...args) => {
    if (funcs.length === 0) {
      return args[0]
    }
    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)
    
    return rest.reduceRight((composed, f) => f(composed), last(...args))
  }
}

export function now(){
  return +new Date();
}

export function logTime(){
  const composedLogTime = compose(log, now)
  return composedLogTime();
}

export function Do(action){
  return function(obj){
    return `${action} ${obj}`
  }
}

export const fuck = Do('fuck');
export const push = Do('push');
export const pull = Do('pull');
export const hit = Do('hit');