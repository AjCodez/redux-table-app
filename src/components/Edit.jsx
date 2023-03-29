import React from 'react'

function Edit(props) {
    const handleEditClick = () => {
        console.log(props.id);
    }
  return (
    <div>
        <button onClick= { handleEditClick } >edit</button>
    </div>
  )
}

export default Edit