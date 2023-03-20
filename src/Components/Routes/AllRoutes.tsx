import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homescreen from "../Homescreen"



const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <Homescreen />,
        },
])
  return element
}

export default AllRoutes