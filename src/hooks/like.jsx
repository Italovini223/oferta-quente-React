import { createContext, useContext, useState, useEffect } from 'react';

export const LikeContext = createContext({});

function LikeProvider({ children }) {
  const [likes, setLikes] = useState(JSON.parse(localStorage.getItem(`@ofertaQuente:likes`)) || []);

  function addLike(data) {
    setLikes([...likes, data])
  }

  async function removeLike(data) {
    const filteredLikes = await  likes.filter((product) => product.id !== data.id)

    setLikes([...filteredLikes])
    

  }

  useEffect(() => {
    localStorage.setItem(`@ofertaQuente:likes`, JSON.stringify(likes));
  }, [likes])

  return (
    <LikeContext.Provider value={{ 
      likes,
      addLike,
      removeLike
    }}>
      { children }
    </LikeContext.Provider>
  )
}

function useLike() {
  const context = useContext(LikeContext);
  return context;
}

export { LikeProvider, useLike };