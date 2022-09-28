import { userActions } from "../slice/userSlice";
import BackApi from "../../api/BackApi";
import axios from "axios";

const userAxios = async (jwt) => {
  const apiClient = axios.create({
    baseURL: BackApi.users.mypage,
    headers: { "X-ACCESS-TOKEN": jwt },
  });

  try {
    const res = await apiClient.get();
    return res;
  } catch (error) {
    console.error(error);
  }
};

//미들웨어
const getUserAPI = (jwt) => {
  return async function (dispatch) {
    const response = await userAxios(jwt);
    dispatch(userActions.setUser(response.data));
  };
};

const usersActions = { getUserAPI };

export default usersActions;
