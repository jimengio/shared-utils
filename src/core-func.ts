import _ from "lodash";
import produce from "immer";

// indend to copy useful function from Clojure, which are not provided by lodash
// http://cljs.info/cheatsheet/

function iterInterpose(acc: any[], xs: any[], sep: any): any[] {
  if (xs.length === 0) {
    return acc;
  } else if (acc.length === 0) {
    return iterInterpose([xs[0]], xs.slice(1), sep);
  } else {
    return iterInterpose(acc.concat([sep, xs[0]]), xs.slice(1), sep);
  }
}

// takes `[a, b, c]` and `sep`, returns `[a, sep, b, sep, c]`
export function interpose(xs: any[], sep: any): any[] {
  return iterInterpose([], xs, sep);
}

// something, no nil
export function some(x: any): boolean {
  return x != null;
}

export let isFunction = _.isFunction;

export let isNil = (x: any) => x == null;

export function hasItems(x: any[]): boolean {
  return Array.isArray(x) && x.length > 0;
}

export function isListEmpty(x: any): boolean {
  return x == null || (Array.isArray(x) && x.length === 0);
}

export function isAnEmptyList(x: any): boolean {
  return Array.isArray(x) && x.length === 0;
}

export function immerMerge<T = { [k: string]: string }>(x: T, y: T): T {
  return produce(x, (draft) => {
    Object.assign(draft, y);
  });
}
