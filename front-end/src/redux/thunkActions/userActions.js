// redux/thunkActions/postsActions.js
import { userActions } from "../slice/UserSlice";
import postAPI from "api/postAPI";

//미들웨어
const getUserAPI = () => {
  return async function (dispatch) {
    const response = await backAPI.userAxios();
    dispatch(userActions.setPost(response.posts));
  };
};

const postsActions = { getPostAPI };

export default postsActions;
