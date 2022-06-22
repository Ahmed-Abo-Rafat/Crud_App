import React, {Component, Fragment} from "react";

class ListItems extends Component {

  state = {
    isEdit: false,
  }

  //renderCourse items
  renderCourse = () => {
    return(
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => {this.toggleEdit()}}>Edit</button>
        <button onClick={() => {this.props.deleteCourses(this.props.index)} }>&times;</button>
      </li>
    )
  }

  //toggleEdit 
  toggleEdit = () => {
    let {isEdit} = this.state;
    this.setState({
      isEdit: !isEdit,
    })
  }

  //updateItemsForm
  updateItemsForm = (e) => {
    e.preventDefault();
    this.props.updateItem(this.props.index, this.input.value);
    this.toggleEdit();
  }

  //renderUpdateForm
  renderUpdateForm = () => {
    return(
      <form onSubmit={this.updateItemsForm}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
        <button className="update">Update</button>
      </form>
    )
  }



  render() {
    return (
      <Fragment>
        {this.state.isEdit? this.renderUpdateForm() : this.renderCourse()} 
      </Fragment>
    );
      

    
  }

}
    

export default ListItems;
