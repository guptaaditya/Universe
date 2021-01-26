import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import * as queries from './queries';

export default function Clock(props) {
  const { Name } = props.timeZone;
  const timeZoneOffsetName = queries.getTimeZoneOffsetName(Name);

  const getTime = useCallback(() => moment().zone(timeZoneOffsetName).format('HH:mm:ss'), [timeZoneOffsetName]);

  const [time, setTime] = useState(getTime());
  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, [getTime]);

  return (
      <div className="timezone-time">{time}</div>
  );
}