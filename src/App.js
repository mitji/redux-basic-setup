import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from './redux/actions/actions';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:8000/students')
      .then(response => {
        this.props.addAllStudents(response.data);
      })
  }

  render() {
    const { students } = this.props;
    return (
      <main className="App">
        { !students 
          ? null
          : students.map((student, index) => (
              <Student info={student} key={index} />
          )) 
        }

        <AddStudent addStudentToList={this.addStudent} />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return{ 
    students: state, 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAllStudents: allStudents => {
      dispatch(actions.addAllStudents(allStudents))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
