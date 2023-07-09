import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import {
   deleteDetailBill,
   getDetailBill,
   setTotal,
} from "../../redux/global.slice";
import http from "../../axios/http";

export default function BasicTable() {
   const curBill = useSelector((state: RootState) => state.global.CurrentBill);
   const CurrentTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const billDetail = useSelector(
      (state: RootState) => state.global.billDetails
   );
   const dispatch = useDispatch();
   const appDispatch = useAppDispatch();
   // settotal
   useEffect(() => {
      appDispatch(getDetailBill(CurrentTable?.MaHD));
   }, [CurrentTable, curBill]);
   useEffect(() => {
      let total = billDetail.reduce((acc, cur) => {
         return acc + cur.Gia * cur.SoLuong;
      }, 0);
      dispatch(setTotal(total));
   }, [billDetail, curBill]);
   const handleDelete = async (id: number) => {
      try {
         await appDispatch(deleteDetailBill(id));
         await appDispatch(getDetailBill(CurrentTable?.MaHD));
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {}, [billDetail]);
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Orders</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                     Giá (đ)
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                     Số Lượng
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                     Thành TIền
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}></TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {billDetail.map((row, index) => (
                  <TableRow
                     key={index}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell
                        component="th"
                        scope="row"
                        sx={{ maxWidth: 50 }}
                     >
                        {row.TenSP}
                     </TableCell>
                     <TableCell align="right">{row.Gia}</TableCell>
                     <TableCell align="right">{row.SoLuong}</TableCell>
                     <TableCell align="right">
                        {row.Gia * row.SoLuong -
                           row.Gia * row.SoLuong * row.ChietKhau}
                     </TableCell>
                     <TableCell align="right">
                        <i className="fa-solid fa-pen-to-square cursor-pointer"></i>{" "}
                        |{" "}
                        <i
                           className="fa-solid fa-delete-left cursor-pointer"
                           onClick={() => handleDelete(row.id)}
                        ></i>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
