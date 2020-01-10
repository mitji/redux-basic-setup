import React, { Component } from 'react';
// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from './../redux/actions/actions';

class AddStudent extends Component {
  state = {
    name: '',
    country: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, country } = this.state;

    if(name === '' || country === '') return;
    else {
      axios.post('http://localhost:8000/students', { id: this.props.students.length, name: name, country: country })
      .then(response => {
        this.props.addStudent({ name, country });
      })
      
      this.setState({name: '', country: ''});
    }
  }

  render() {
    const { name, country} = this.state;

    return(
      <section>
        <h1></h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br/>

          <input type="text" name="name" value={name}
                  onChange={this.handleChange} placeholder="Student's name"
                  style={{marginBottom: '10px'}}
          />

          <br/>
          <label htmlFor="country">Country</label>
          <br/>

          <input type="text" name="country" value={country}
                  onChange={this.handleChange} placeholder="Student's country"
                  style={{marginBottom: '10px'}}
          />

          <br/>
          <button type="submit">Add Student</button>
        </form>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    students: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStudent: (newStudentObj) => {
      dispatch(actions.addStudent(newStudentObj))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);