import React from "react";
import "./ImportGoods.scss";
const BillGoods = () => {
   return (
      <div className="importGoods">
         <h3 className="text-slate-900 font-bold">Hoá Đơn Nhập Hàng</h3>
         <div className="detail">
            <span>Nhan vien nhap hang</span>
            <span>Ma NV</span>
            <span>Ma CH</span>
            <span>Cty Nhap Hang</span>
            <span>Ma Cty</span>
            <span>Ngay Nhap</span>
         </div>
         <div className="goods">
            <table className="table table-striped ">
               <thead>
                  <tr>
                     <th scope="col">STT</th>
                     <th scope="col">Tên Nguyên Liệu</th>
                     <th scope="col">Giá (đ)</th>
                     <th scope="col">Số Lượng</th>
                     <th scope="col">Đơn Vị</th>
                     <th scope="col">Thành Tiền (đ)</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td valign="middle">Mark</td>
                     <td valign="middle">Otto</td>
                     <td valign="middle">@mdo</td>
                     <td valign="middle">@mdo</td>
                     <td valign="middle">@mdo</td>
                     <td valign="middle">
                        <button
                           type="button"
                           className="btn btn-outline-danger "
                        >
                           <i className="fa-solid fa-delete-left text-red-500  hover:text-white"></i>
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="footerImport">
            <div className="totalPrice">
               <span>
                  Tổng Tiền Trả: <span>{10000}</span> (đ)
               </span>
            </div>
            <div className="importNav">
               <button type="button" className="btn btn-outline-primary">
                  Thêm
               </button>
               <button type="button" className="btn btn-outline-success">
                  Nhập Hàng
               </button>
            </div>
         </div>
      </div>
   );
};

export default BillGoods;
