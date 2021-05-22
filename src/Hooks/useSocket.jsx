import { useContext } from 'react'

import { Context } from "../Context/Socket"

const useSocket = () => useContext(Context)

export default useSocket