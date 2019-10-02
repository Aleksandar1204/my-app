import React from 'react'

const Error = () => {
   return <div>
       Oops, something went wrong
   
   <button id="go_back" onClick={()=> window.history.back()}>
       Go back
   </button>
   </div>
}

export default Error