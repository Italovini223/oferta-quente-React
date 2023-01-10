import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { api } from "../Service/api";


const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});

  async function singIn({email, password}){
    try{
      const response = await api.post('/login', {email, password});

      const {user} = response.data

      localStorage.setItem("@ofertaQuente:user", JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`

      setData({user});


    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else {
        return alert("Não foi possível fazer login ")
      }
    }
  }

  function singOut(){
    localStorage.removeItem("@ofertaQuente:user");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@ofertaQuente:user");

    if(user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
      setData({user: JSON.parse(user)});
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      singIn,
      singOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}