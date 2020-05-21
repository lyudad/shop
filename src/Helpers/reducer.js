export const createReducer = (initialState, reducer) => (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}