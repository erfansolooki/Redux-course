import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import store from "./Redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCream";
import HooksCakeContainerWithPayload from "./Components/CakeContainerWithPayload";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer />
        <HooksCakeContainerWithPayload />
        <IceCreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
