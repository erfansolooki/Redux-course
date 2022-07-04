import { buyCake } from "../Redux/Cake/CakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cake - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(CakeContainer);
