import React from 'react';
import * as queries from './queries';

function TimezoneName(props) {
  const { timeZone: { Name }, searchTerm } = props;
  const TimeZoneOffsetName = queries.getTimeZoneOffsetName(Name);
  const timeZone = queries.closestSearchName(Name, searchTerm);
  return (
      <div>
        <div className="timezone-name">{timeZone}</div>
        <div className="timezone-offset">{TimeZoneOffsetName}</div>
      </div>
  );
}

export default TimezoneName;