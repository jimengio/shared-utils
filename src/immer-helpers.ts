import produce from "immer";

export interface ImmerStateFunc<S> {
  (f: ((s: S) => void)): Promise<any>;
}

export interface MergeStateFunc<S> {
  (partialState: Partial<S>): Promise<any>;
}

export let immerHelpers = {
  setState: (...f: any[]) => void {},

  async immerState<S>(f: ((s: S) => void)): Promise<any> {
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
