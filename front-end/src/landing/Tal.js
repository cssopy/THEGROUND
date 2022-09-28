import axios from "axios";
import { useSelector } from "react-redux/es/exports";

const Tal = () => {
  const jwt = useSelector((state) => state.user.user.jwt);
  const deleteUser = () => {
    axios
      .delete("https://j7d109.p.ssafy.io/back/users/quit", {
        headers: { "X-ACCESS-TOKEN": jwt },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return <button onClick={deleteUser}>회원 탈퇴</button>;
};

export default Tal;
