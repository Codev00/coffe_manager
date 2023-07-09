export type User = {
   username: string;
   MaCH: number;
   admin: boolean;
};

export type Staff = {
   MaNV: number;
   HoTen: string;
   NgaySinh: Date;
   GioiTinh: string;
   sdt: string;
   DiaChi: string;
   MaCH: number;
};

export type Store = {
   MaCH: number;
   tenCH: string;
   DiaChi: string;
   sdt: string;
   MaCty: number;
   created_at: Date;
   updated_at: Date;
};

export type Area = {
   MaKV: number;
   TenKV: string;
   TrangThai: number;
   MaCH: number;
   created_at: Date;
   updated_at: Date;
};

export type TableType = {
   MaBan: number;
   TenBan: string;
   TrangThai: number;
   MaCH: number;
   MaKV: number;
   MaHD: number;
};

export type Bill = {
   MaHD: number;
   MaNV: number;
   MaKV: number;
   MaBan: number;
   TrangThai: boolean | number;
   TongThu: number;
   MaCH: number;
   created_at: Date;
};

export type ProductType = {
   MaSP: number;
   TenSP: string;
   Gia: number;
};

export type DetailBillType = {
   MaSP: number;
   SoLuong: number;
   ChietKhau: number;
   MaCH: number;
   MaHD: number;
};

export type Order = {
   id: number;
   TenSP: string;
   Gia: number;
   SoLuong: number;
   ChietKhau: number;
};
