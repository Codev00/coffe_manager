import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import NhapHang from "../pages/NhapHang/NhapHang";
import HoaDon from "../pages/HoaDon/HoaDon";
import Root from "../pages/root/root";
import Manager from "../pages/Manager/Manager";
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route index path="" element={<Home />}></Route>
         <Route path="import" element={<NhapHang />}></Route>
         <Route path="bill" element={<HoaDon />}></Route>
         <Route path="manager" element={<Manager />}></Route>
      </Route>
   )
);

export default router;
