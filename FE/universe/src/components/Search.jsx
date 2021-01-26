import React, { useState } from 'react'
import axios from 'axios'

import TimezoneList from './Timezone/TimezoneList'

const SearchBar = props => (
  <div className="search-input">
    <input onChange={props.search} placeholder="Please search by typing timezone/country name" />
  </div>
);

function Search(props) {
  const [searchTerm, setSeachTerm] = useState("");
  const [timeZones, setTimeZones] = useState([]);

  const getSearchedTimezones = async (search) => {
    if (!search) return;
    try {
      let queryData = await axios.post('/api/timezone', { search });
      setTimeZones(queryData.data.search);
    } catch (e) {
      console.error(e);
      setTimeZones([])
    }
  };

  const searchData = e => {
    const term = e.target.value;
    setSeachTerm(term);
    if (term) {
      getSearchedTimezones(term.trim());
    } else {
      setTimeZones([])
    }
  };

  return (
    <div className="search">
      <SearchBar search={searchData} />
      {timeZones && <TimezoneList searchTerm={searchTerm} data={timeZones} />}
    </div>
  );
}

export default Search;