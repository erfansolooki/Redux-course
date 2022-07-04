import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../Redux/Cake/CakeAction";

const HooksCakeContainerWithPayload = (props) => {
  const [numbers, setNumbers] = useState(0);
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cake - {numOfCake}</h2>
      <input type="text" onChange={(event) => setNumbers(event.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        Buy {numbers} cake
      </button>
    </div>
  );
};

export default HooksCakeContainerWithPayload;
