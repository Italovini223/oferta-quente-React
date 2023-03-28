import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { api } from "../Service/api";


const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});

  async function singIn({email, password}){
    try{
      const response = await api.post('/login', {email, password});

      const {user} = response.data

      localStorage.setItem("@ofertaQuente:user", JSON.stringify(user));
      localStorage.setItem("@ofertaQuente:token", user.token)

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

  async function updateUser(user) {
    const { name, telefone, id } = user;

    const formData = new FormData()

    formData.append("name", name)
    formData.append("id", String(id))
    formData.append("telefone", String(telefone))

    
    try {
  
      await api.post('/atualizarUser', formData)

      localStorage.setItem("@ofertaQuente:user", JSON.stringify(user));
      localStorage.setItem("@ofertaQuente:token", user.token)

      setData({user})

      alert("Perfil atualizado com sucesso!")
    } catch(error){
      console.log(error)
      return alert("Não foi possível atualizar o perfil");
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@ofertaQuente:user");

    if(user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
      setData({
        user: JSON.parse(user)
      });
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      singIn,
      singOut,
      user: data.user,
      updateUser
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