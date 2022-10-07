import { gameActions } from "../slice/gameSlice";
import BackApi from "../../api/BackApi";
import axios from "axios";

const gameAxios = async () => {
  const apiClient = axios.create({
    baseURL: BackApi.users.games,
  });

  try {
    const res = await apiClient.get();
    return res;
  } catch (error) {
    console.error(error);
  }
};

//미들웨어
const getGameAPI = () => {
  return async function (dispatch) {
    const response = await gameAxios();
    dispatch(gameActions.setGames(response.data));
  };
};

const gamesActions = { getGameAPI };

export default gamesActions;
