import { configureStore } from "@reduxjs/toolkit";
import allStudentsSlice from "../features/allStudents/allStudentsSlice";

const store = configureStore(
  {
  reducer: {
    students: allStudentsSlice,
  },
}
);

export default store;
