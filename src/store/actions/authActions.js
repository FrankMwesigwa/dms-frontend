import axios from "axios";
import API from "../../helpers/api";

export const login = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await API.post("/user/login", { ...user });

      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: "LOGOUT_FAIL",
        payload: error,
      });
    }
  };
};

export const logOut = (history) => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({ type: "LOGOUT_SUCCESS" });
    history.push("/login");
  };
};
