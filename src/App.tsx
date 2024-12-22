import { Body, Footer, Header } from "components";
import { Provider } from "react-redux";
import store from "redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
};

export default App;
