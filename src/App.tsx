import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
function App() {
   return (
      <div className="App" id="">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
