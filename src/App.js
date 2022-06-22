import React, {Component} from "react";
import ListItems from "./Component/ListItems";
import AddItems from "./Component/AddItems";
class App extends Component {

  state = {
    courses: [
      {name:'html'},
      {name:'css'},
      {name:'js'},
    ],
    curent: ''
  }

  //Upadate Course
  updateCourse = (e) => {
    this.setState({
      curent: e.target.value
    })
  }

  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    let curent = this.state.curent;
    let courses = this.state.courses;
    if(curent) {
      courses.push({name: curent});
      this.setState({
      courses: courses,
      curent: ''
      })
    }
    else {
      return false;
    }
    
  }
  
  //deleteCourses
  deleteCourses = (indx) => {
    let courses = this.state.courses;
    courses.splice(indx, 1);
    this.setState({
      courses: courses
    })
  }

  //updateItem
  updateItem = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({course: course});
  }


  render() {
    const {courses} = this.state;
    let sum = this.state.courses.length;
    const courserList = sum ? courses.map((course, index) => {
      return <ListItems details={course} key={index} index={index} deleteCourses={this.deleteCourses} updateItem={this.updateItem}/>
    }) : (
      <p>There Is No Items To Show</p>
    )
    return (
      <section className="App">
        <h2>Add Courses</h2>
        <AddItems updateCourse={this.updateCourse} addCourse={this.addCourse} curent={this.state.curent} />
        <ul>{courserList}</ul>
       
      </section>
    );
  }
 
}

export default App;
