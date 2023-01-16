/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { useGetData } from "../hooks/useGetData";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { GlobalContext } from './GlobalContext';
import { getValidToken } from "../utils/getValidToken";
import { useSessionStorage } from './../hooks/useSessionStorage';

export const GlobalState = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useSessionStorage("users",[])
  const [token, setToken] = useLocalStorage("token", null)
  const [sessionToken, setSessionToken] = useSessionStorage("token", null)
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    getUsersData()
  }, [])

  useEffect(()=>{
     getValidToken(token,setIsValid)
  },[])

  const getUsersData = async () => {
    setLoading(true)
    try {
      const dataUser = await useGetData();
      setUsers(dataUser)
    } catch (error) {
      setError(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        users,
        setUsers,
        token, 
        setToken,
        isValid,
        setIsValid,
        sessionToken,
        setSessionToken
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
