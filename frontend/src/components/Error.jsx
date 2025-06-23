import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    //to show specifix error
   const error= useRouteError();
   console.log(error);
  return (
    <div>
        <h1>Error Page</h1>
       <h1>Error:{error.status}-{error.statusText}</h1>
       <h1>Error:{error.data}</h1>

    </div>
  )
}

export default Error