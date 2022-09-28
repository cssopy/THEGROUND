import { logoActions } from "../slice/logoSlice";
import BackApi from "../../api/BackApi";
import axios from "axios";
import { userActions } from "../slice/userSlice";

const logoAxios = async () => {
  const apiClient = axios.create({
    baseURL: BackApi.users.logos,
  });

  try {
    const res = await apiClient.get();
    return res;
  } catch (error) {
    console.error(error);
  }
};

//미들웨어
const getLogoAPI = () => {
  return async function (dispatch) {
    const response = await logoAxios();
    dispatch(logoActions.setLogos(response.data));
    dispatch(userActions.setLogo(response.data[0]));
  };
};

const logosActions = { getLogoAPI };

export default logosActions;
