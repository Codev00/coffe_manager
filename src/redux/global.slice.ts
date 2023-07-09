import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../axios/http";
import {
   Area,
   Bill,
   DetailBillType,
   Order,
   ProductType,
   Staff,
   Store,
   TableType,
} from "../types/user.type";

interface GlobalState {
   Notification: boolean;
   navSelect: number;
   MaCH: number;
   MaHD: boolean;
   MaBill: number;
   RoomId: number | null;
   staff: Staff[];
   store: Store[];
   area: Area[];
   listBill: Bill[];
   billDetails: Order[];
   table: TableType[];
   product: ProductType[];
   ChoosedTable: TableType;
   CurrentBill: Bill;
   addModal: boolean;
   total: number;
   msg: string;
}
const initialState: GlobalState = {
   Notification: false,
   navSelect: 0,
   MaCH: 1,
   MaHD: false,
   MaBill: 0,
   RoomId: null,
   addModal: false,
   staff: [],
   store: [],
   area: [],
   table: [],
   listBill: [],
   billDetails: [],
   product: [],
   total: 0,
   msg: "",
   ChoosedTable: {
      MaBan: 0,
      TenBan: "",
      TrangThai: 0,
      MaCH: 0,
      MaKV: 0,
      MaHD: 0,
   },
   CurrentBill: {
      MaHD: 0,
      MaNV: 0,
      MaKV: 0,
      MaBan: 0,
      TrangThai: 0,
      TongThu: 0,
      MaCH: 0,
      created_at: new Date(),
   },
};

// Async thunk
export const getStaff = createAsyncThunk(
   "global/getStaff",
   async (id: number, thunkAPI) => {
      try {
         const res = await http.get<Staff[]>(`/query/staff/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const getStore = createAsyncThunk(
   "global/getStore",
   async (id: number | null, thunkAPI) => {
      try {
         const res = await http.get<Store[]>(`/query/store/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const getArea = createAsyncThunk(
   "global/getArea",
   async (id: number | null, thunkAPI) => {
      try {
         const res = await http.get<Area[]>(`/query/area/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const getTable = createAsyncThunk(
   "global/getTable",
   async (id: number | null, thunkAPI) => {
      try {
         const res = await http.get<TableType[]>(`/query/table/${id}`, {
            signal: thunkAPI.signal,
         });

         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);
export const getListBill = createAsyncThunk(
   "global/getListBill",
   async (id: number | null, thunkAPI) => {
      try {
         const res = await http.get<Bill[]>(`/query/bill/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);
export const getProduct = createAsyncThunk(
   "global/getProduct",
   async (id: number | null, thunkAPI) => {
      try {
         const res = await http.get<ProductType[]>(`/query/product/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const editTable = createAsyncThunk(
   "global/editTable",
   async (
      {
         id,
         data,
      }: { id: number | null | undefined; data: Omit<TableType, "MaBan"> },
      thunkAPI
   ) => {
      try {
         const res = await http.put(`/table/edit/${id}`, data, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const createBill = createAsyncThunk(
   "global/createBill",
   async (data: Omit<Bill, "MaHD">, thunkAPI) => {
      try {
         const res = await http.post("/bill/create", data, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const editBill = createAsyncThunk(
   "global/editBill",
   async (data: Bill, thunkAPI) => {
      try {
         const res = await http.put(`/bill/edit/${data.MaHD}`, data, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const getBill = createAsyncThunk(
   "global/getBill",
   async (id: number, thunkAPI) => {
      try {
         const res = await http.get<Bill>(`/bill/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const addProduct = createAsyncThunk(
   "global/addProduct",
   async (data: ProductType, thunkAPI) => {
      try {
         const res = await http.post("/product/create", data, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const addDetailbill = createAsyncThunk(
   "global/addDetailbill",
   async (data: DetailBillType, thunkAPI) => {
      try {
         const res = await http.post("/billDetail/create", data, {
            signal: thunkAPI.signal,
         });

         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const deleteDetailBill = createAsyncThunk(
   "global/deleteDetailBill",
   async (id: number, thunkAPI) => {
      try {
         const res = await http.delete(`/billDetail/delete/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const getDetailBill = createAsyncThunk(
   "global/getDetailBill",
   async (id: number, thunkAPI) => {
      try {
         const res = await http.get<Order[]>(`/query/billDetail/${id}`, {
            signal: thunkAPI.signal,
         });
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const setPay = createAsyncThunk(
   "global/setPay",
   async (id: number, thunkAPI) => {
      try {
         const res = await http.put(
            `/table/updateMaHD/${id}`,
            {},
            {
               signal: thunkAPI.signal,
            }
         );
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

export const setPayBill = createAsyncThunk(
   "global/setPayBill",
   async ({ id, TongThu }: { id: number; TongThu: number }, thunkAPI) => {
      try {
         const res = await http.put(
            `/bill/pay/${id}`,
            { TongThu },
            {
               signal: thunkAPI.signal,
            }
         );
         return res.data;
      } catch (error: any) {
         if (error.name === "AxiosError" && error.response?.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data);
         }
         throw error;
      }
   }
);

const globalSlice = createSlice({
   name: "global",
   initialState,
   reducers: {
      setNav: (state, actions) => {
         state.navSelect = actions.payload;
      },
      setMaCH: (state, actions) => {
         state.MaCH = actions.payload;
      },
      setRoomId: (state, actions) => {
         state.RoomId = actions.payload;
      },
      setMaHD: (state, actions) => {
         state.MaHD = actions.payload;
      },
      setChoosedTable: (state, actions) => {
         state.ChoosedTable = actions.payload;
      },
      setAddModal: (state, actions) => {
         state.addModal = actions.payload;
      },
      setTotal: (state, actions) => {
         state.total = actions.payload;
      },
      setMsg: (state, actions) => {
         state.msg = actions.payload;
      },
      setNotification: (state, actions) => {
         state.Notification = actions.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getStaff.fulfilled, (state, action) => {
            state.staff = action.payload;
         })
         .addCase(getStore.fulfilled, (state, action) => {
            state.store = action.payload;
         })
         .addCase(getArea.fulfilled, (state, action) => {
            state.area = action.payload;
         })
         .addCase(getTable.fulfilled, (state, action) => {
            state.table = action.payload;
         })
         .addCase(editTable.fulfilled, (state, action) => {
            console.log(action.payload);
         })
         .addCase(createBill.fulfilled, (state, action) => {
            console.log(action.payload);
         })
         .addCase(editBill.fulfilled, (state, action) => {
            console.log(action.payload?.message);
         })
         .addCase(getBill.fulfilled, (state, action) => {
            state.CurrentBill = action.payload;
         })
         .addCase(addProduct.fulfilled, (state, action) => {
            console.log(action.payload);
         })
         .addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
         })
         .addCase(addDetailbill.fulfilled, (state, action) => {
            console.log(action.payload);
         })
         .addCase(deleteDetailBill.fulfilled, (state, action) => {
            console.log(action.payload);
         })
         .addCase(getDetailBill.fulfilled, (state, action) => {
            state.billDetails = action.payload;
         })
         .addCase(setPay.fulfilled, (state, action) => {
            state.msg = action.payload;
         })
         .addCase(getListBill.fulfilled, (state, action) => {
            state.listBill = action.payload;
         });
   },
});

export const {
   setNav,
   setMaCH,
   setRoomId,
   setMaHD,
   setChoosedTable,
   setAddModal,
   setTotal,
   setMsg,
   setNotification,
} = globalSlice.actions;
const globalReducer = globalSlice.reducer;
export default globalReducer;
