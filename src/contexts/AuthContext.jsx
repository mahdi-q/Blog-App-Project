"use client";

import { getUserApi, signinApi, signupApi } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: true,
        error: null,
      };

    case "SIGNUP":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case "SIGNIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case "USER/LOADED":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case "REJECTED":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState,
  );

  async function signup(values) {
    dispatch({ type: "LOADING" });

    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "SIGNUP", payload: user });
      router.push("/profile");
      toast.success(message);
    } catch (error) {
      dispatch({ type: "REJECTED", payload: error });
      toast.error(error?.response?.data?.message);
    }
  }

  async function signin(values) {
    dispatch({ type: "LOADING" });

    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "SIGNIN", payload: user });
      router.push("/profile");
      toast.success(message);
    } catch (error) {
      dispatch({ type: "REJECTED", payload: error });
      toast.error(error?.response?.data?.message);
    }
  }

  async function getUser() {
    dispatch({ type: "LOADING" });

    try {
      const { user } = await getUserApi();
      dispatch({ type: "USER/LOADED", payload: user });
    } catch (error) {
      dispatch({ type: "REJECTED", payload: error });
      console.log(error?.response?.data?.message);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      await getUser();
    }

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signup, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
