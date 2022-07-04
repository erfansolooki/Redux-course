import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyIceCream } from "../Redux/IceCream/iceCreamActions";

const IceCreamContainer = (props) => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of iceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  );
};

export default IceCreamContainer;
