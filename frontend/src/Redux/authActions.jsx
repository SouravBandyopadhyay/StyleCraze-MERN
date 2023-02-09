import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const backendURL = "https://stylecraze-backend.onrender.com";
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendURL}/api/user/login`,
        { email, password },
        config
      );
      localStorage.setItem("userToken", data.userToken);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      await axios.post(
        `${backendURL}/api/user/register`,
        { firstName, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// Admin Can Login Only register will be done from backend.
// Admin Login
export const adminLogin = createAsyncThunk(
  "admin/adminlogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendURL}/api/admin/adminlogin`,
        { email, password },
        config
      );
      localStorage.setItem("adminToken", data.adminToken);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
