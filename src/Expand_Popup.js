import React from 'react'
import '../assets/Expand.css'


const Expand_Popup =() =>{
    return ( 
        <div class="alert-box">
                    <p class="p-header">Delete Product</p>
                    <p>You are about to delete this product. Are you sure you wish to continue? </p>
                    <div class="alert-buttons">
                    <button class="cancel-button">CLOSE</button>
                    <button class="delete-button">DELETE</button>
                    <button class="save-button">SAVE</button>
                    
                    </div>
                </div>
    )

}

export default Expand_Popup