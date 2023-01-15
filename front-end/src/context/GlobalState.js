/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { useGetData } from "../hooks/useGetData";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { GlobalContext } from './GlobalContext';
import { getValidToken } from "../utils/getValidToken";
<<<<<<< HEAD
=======
import { useSessionStorage } from './../hooks/useSessionStorage';
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563

export const GlobalState = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
<<<<<<< HEAD
  const [user, setUser] = useLocalStorage("user",[])
  const [token, setToken] = useLocalStorage("token", null)
  const [isValid, setIsValid] = useState();


=======
  const [users, setUsers] = useSessionStorage("users",[])
  const [token, setToken] = useLocalStorage("token", null)
  const [sessionToken, setSessionToken] = useSessionStorage("token", null)
  const [isValid, setIsValid] = useState();

>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
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
<<<<<<< HEAD
        setIsValid
=======
        setIsValid,
        sessionToken,
        setSessionToken
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
