import React,{createContext , useState} from 'react'
export const ChangeScreen = createContext(false)
const Loader = ({children}) => {

    const [loader,isLoader] = useState(true)

  return (
    <>
       <ChangeScreen.Provider value={{loader , isLoader}}>{children}</ChangeScreen.Provider>
    </>
  )
}

export default Loader