import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../Redux/Cake/CakeAction";

const HooksCakeContainer = (props) => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cake - {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
