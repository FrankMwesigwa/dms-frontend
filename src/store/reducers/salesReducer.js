let initialState = [];

if (typeof window !== "undefined") {
  if (localStorage.getItem("sales")) {
    initialState = JSON.parse(localStorage.getItem("sales"));
  } else {
    initialState = [];
  }
}

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_SALES":
      return action.payload;
    default:
      return state;
  }
};

export default salesReducer;
