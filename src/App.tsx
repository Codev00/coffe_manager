import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
function App() {
   return (
      <div className="App bg-slate-50 dark:bg-slate-900 text-orange-400" id="">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
