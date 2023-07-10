import React, { createContext, useState } from "react";

interface User {
  nombre: string;
  uid: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface AuthContextProps {
  status: "authenticated" | "not-authenticated" | "checking";
  token: string | null;
  user: User | null;
  errorMessage: string;
  signUp: ({}) => void;
  signIn: ({}: LoginData) => void;
  logOut: () => void;
  // removeError: () => void;
}

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  token: string | null;
  user: User | null;
  errorMessage: "";
}

export const AuthContext = createContext({} as AuthContextProps);

const initialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AuthState>(initialState);

  const signUp = () => {
    // console.log('hola mundo')
  };
  const signIn = () => {
    // console.log('hola mundo')
    setState({
      ...state,
      status: "authenticated",
    });
  };
  const logOut = () => {
    // console.log('hola mundo')
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// qwe
