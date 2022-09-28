import { playerActions } from "../slice/playerSlice";
import BackApi from "../../api/BackApi";
import axios from "axios";

const playerAxios = async () => {
  const apiClient = axios.create({
    baseURL: BackApi.stats,
  });

  try {
    const res = await apiClient.get();
    return res;
  } catch (error) {
    console.error(error);
  }
};

//미들웨어
const getPlayerAPI = () => {
  return async function (dispatch) {
    const response = await playerAxios();
    dispatch(playerActions.setPlayers(response.data));
  };
};

const playersActions = { getPlayerAPI };

export default playersActions;
