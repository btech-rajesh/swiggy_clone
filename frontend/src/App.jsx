import { Outlet } from "react-router-dom";
import ApiCalling from "./components/ApiCalling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App(){
  return(
    //this is the store for each component and it is provided to the entire app
    //so that each component can access the store and use the data from it
    //and also update the store if needed
    <Provider store={appStore}>
    <div>
      <Header />
      {/* <Body /> */}
       <Outlet/>
      <Footer />
    </div>
    </Provider>
  )
}

export default App;


