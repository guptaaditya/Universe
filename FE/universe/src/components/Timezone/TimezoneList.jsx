import React from "react"
import TimezoneName from './TimezoneName';
import Clock from './Clock'

const TimezoneList = (props) => {
  return (
    <div className="timezone">
        {props.data.map(value => (
          <div className="timezone-card">
            <TimezoneName timeZone={value} searchTerm={props.searchTerm} />
            <Clock key={value.Id} timeZone={value} />
          </div>
        ))}
    </div>
  )
};

export default TimezoneList