import React from 'react'
import axios from 'axios'
import {Header} from './Header'
import {SearchResult} from './SearchResult'

const SearchBar = (props) => {
    return(
      <div>
        <input onChange={props.search} placeholder="Search..."/>
      </div>
    )
}

class Search extends React.Component {
  state = {
      data: [],
      appName: 'Search Bar',
      list: []
    }

  searchData = (e)=> {
    const params = {
      search : e.target.value
    }

    const fetch = async () => {
        let queryData = [];
        queryData = await axios.post('/api/timezone',params);
        this.setState({list: queryData.data.search});
      }

    fetch();
  }

  render() {
    return(
      <div>
        <Header name={this.state.appName} />
        <SearchBar search={this.searchData} />
        {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
      </div>
    )
  }
}

export default Search;