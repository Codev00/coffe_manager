import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
   name: string,
   calories: number,
   fat: number,
   carbs: number,
   protein: number
) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
   createData("Eclair", 262, 16.0, 24, 6.0),
   createData("Cupcake", 305, 3.7, 67, 4.3),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Gingerbrea", 356, 16.0, 49, 3.9),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
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
               {rows.map((row) => (
                  <TableRow
                     key={row.name}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell
                        component="th"
                        scope="row"
                        sx={{ maxWidth: 50 }}
                     >
                        {row.name}
                     </TableCell>
                     <TableCell align="right">{row.calories}</TableCell>
                     <TableCell align="right">{row.fat}</TableCell>
                     <TableCell align="right">{row.carbs}</TableCell>
                     <TableCell align="right">
                        <i className="fa-solid fa-pen-to-square"></i> |{" "}
                        <i className="fa-solid fa-delete-left"></i>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}