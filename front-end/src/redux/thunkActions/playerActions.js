import { playerActions } from "../slice/playerSlice";
import BackApi from "../../api/BackApi";
import axios from "axios";

const playerAxios = async (jwt) => {
  const apiClient = axios.create({
    baseURL: BackApi.stats,
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
const getPlayerAPI = (jwt) => {
  return async function (dispatch) {
    const response = await playerAxios(jwt);
    dispatch(playerActions.setPlayers(response.data));
  };
};

const playersActions = { getPlayerAPI };

export default playersActions;
