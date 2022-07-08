let initialState = [];

if (typeof window !== "undefined") {
  if (localStorage.getItem("agentcart")) {
    initialState = JSON.parse(localStorage.getItem("agentcart"));
  } else {
    initialState = [];
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART_AGENT":
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
