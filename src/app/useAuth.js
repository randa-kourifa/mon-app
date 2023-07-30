import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useChecktokenMutation } from "./ApiSlice";
import { setUser } from "./rootReducer";

export const useAuth = () => {
  //status of checktoken mutation
  const [checkToken, { status }] = useChecktokenMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await checkToken(token);
        if (res.data) {
          //set user we get in store
          dispatch(setUser(res.data));
        }
      }
    };
    checkAuth();
  }, []);

  //return status of the mutation so that
  //we can use it in other components
  return { status };
};
