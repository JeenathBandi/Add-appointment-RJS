// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {componentList, toToggleIsStarred} = props    
  const {id, name, date, isStarred} = componentList

  const isStarImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickOnStarred = () => toToggleIsStarred(id)

  return (
    <li className="appointment-item-container">
      <div className="name-starred-container">
        <p className="name-heading">{name}</p>
        <button type="button" className="star-btn" data-testid="star" onClick={clickOnStarred}>
          <img
            src={isStarImg}
            alt="star"
            className="star-img"
            
          />
        </button>
      </div>
      <p className="date-text">{date}</p>
    </li>
  )
}
export default AppointmentItem
