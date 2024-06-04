// Write your code here
import './index.css'
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const initialList = []

class Appointments extends Component {
  state = {name: '', date: '', componentList: initialList, clickStarred: false}

  onChangeTitle = event => this.setState({name: event.target.value})

  onChangeDate = event => this.setState({date: event.target.value})

  onAddAppointment = () => {
    const {componentList, name, date} = this.state
    const newItem = {
      id: uuidv4(),
      name,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      componentList: [...prevState.componentList, newItem],
      name: '',
      date: '',
    }))
  }

  toToggleIsStarred = id => {
    this.setState(prevState => ({
      componentList: prevState.componentList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  toggleIsStarred = () => {
    this.setState(prevState => ({clickStarred: !prevState.clickStarred}))
  }

  render() {
    const {name, date, componentList, clickStarred} = this.state
    const filteredResults = componentList.filter(
      each => each.isStarred === true,
    )

    return (
      <div className="bg-container">
        <div className="appointment-container">
          <div className="nxt-container">
            <div className="row-container">
              <h1 className="heading">Add Appointment</h1>
              <div className="for-lable-inputs">
                <label className="labels" htmlFor="title">
                  TITLE
                </label>
                <input
                  onChange={this.onChangeTitle}
                  className="inputs"
                  id="title"
                  placeholder="Title"
                  value={name}
                />
              </div>
              <div className="for-lable-inputs">
                <label className="labels" htmlFor="date">
                  DATE
                </label>
                <input
                  onChange={this.onChangeDate}
                  className="inputs"
                  id="date"
                  type="date"
                  value={date}
                />
              </div>
              <button
                onClick={this.onAddAppointment}
                className="add-btn"
                type="button"
              >
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr className="seperator" />
          <div className="appointments-added-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              onClick={this.toggleIsStarred}
              type="button"
              className="starred-btn"
            >
              Starred
            </button>
          </div>
          <ul className="added-appointment-container">
            {clickStarred
              ? filteredResults.map(each => (
                  <AppointmentItem
                    componentList={each}
                    key={each.id}
                    toToggleIsStarred={this.toToggleIsStarred}
                  />
                ))
              : componentList.map(each => (
                  <AppointmentItem
                    componentList={each}
                    key={each.id}
                    toToggleIsStarred={this.toToggleIsStarred}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
