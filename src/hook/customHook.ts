import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useUser = () => {
   const username = useSelector((state: RootState) => state.user.username);
   return username;
};
