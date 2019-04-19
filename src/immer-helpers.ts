import produce, { Draft, Immutable } from "immer";
import { useState, useReducer, useMemo } from "react";

export interface ImmerStateFunc<S> {
  (f: (s: S) => void): Promise<any>;
}

export interface MergeStateFunc<S> {
  (partialState: Partial<S>): Promise<any>;
}

export let immerHelpers = {
  setState: (...f: any[]) => void {},

  async immerState<S>(f: (s: S) => void): Promise<any> {
    return new Promise((resolve) => {
      this.setState(produce<any>(f), () => {
        resolve();
      });
    });
  },

  async mergeState<S>(partialState: Partial<S>): Promise<any> {
    let newState = produce<S>((state) => {
      Object.assign(state, partialState);
    });
    return new Promise((resolve) => {
      this.setState(newState, () => {
        resolve();
      });
    });
  },
};

export function useImmer<S = any>(initialValue: S): [S, (f: (draft: Draft<S>) => void | S) => void];
export function useImmer(initialValue: any) {
  const [val, updateValue] = useState(initialValue);
  return [
    val,
    (updater: (f: (draft: Draft<any>) => void | any) => void) => {
      updateValue(produce(updater));
    },
  ];
}
