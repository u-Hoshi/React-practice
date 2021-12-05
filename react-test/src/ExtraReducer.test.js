import reducer, {
  fetchDummy,
} from '../src/features/customCounter/customCounterSlice';

describe('extraReducers', () => {
  const initalState = {
    mode: 0,
    value: 0,
  };
  it('should output 100 +payload when fulfilled', () => {
    const action = { type: fetchDummy.fulfilled, payload: 5 };
    const state = reducer(initalState, action);
    expect(state.value).toEqual(105);
  });
  it('should output 100 +payload when rejected', () => {
    const action = { type: fetchDummy.rejected, payload: 5 };
    const state = reducer(initalState, action);
    expect(state.value).toEqual(95);
  });
});
