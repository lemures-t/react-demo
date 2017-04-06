// state is the one that this reducer responsible for
// STATE produced by the reducer;
// STATE is refer to  args state;
export default function(state = null,action){
  switch (action.type){
    case "BOOK_SELECTED":
      return action.payload
  }
  return state;
}
