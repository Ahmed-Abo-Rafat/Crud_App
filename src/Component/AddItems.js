import React from "react";

const AddItems = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input type="text" placeholder="Inter Your Course....." onChange={props.updateCourse} value={props.curent}/>
      <button type="submit">Add</button>
    </form>
  )

 
}

export default AddItems;
