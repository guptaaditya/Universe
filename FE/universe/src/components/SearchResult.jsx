import {Item} from './Item'

export const SearchResult = (props) => {

console.log(props.data)
    return (
      <div>
        <ul>
          {props.data.map(function({Id,Name}) {
              return <Item key={Id} val={Name} />
          })}
        </ul>
      </div>
    )
}