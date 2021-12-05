import reducer, {
  increment,
  incrementByAmount,
  // incrementByAmount,
} from './features/customCounter/customCounterSlice.js';

describe('Reducer of ReduxToolKit', () => {
  describe('increment action', () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it('should increment by 1 with mode 0', () => {
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });
    it('should increment by 100 with mode 1', () => {
      let initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });
    it('should increment by 100 with mode 1', () => {
      let initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(10001);
    });
  });
  describe('incrementByAmount action', () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it('should increment by payload value with mode 0', () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it('should increment by payload value with mode 0', () => {
      let initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    it('should increment by payload value with mode 0', () => {
      let initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(30001);
    });
  });
});
