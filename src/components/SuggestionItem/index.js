import './index.css'

const SuggstionItem = props => {
  const {listItems, updatedList} = props
  const {suggestion} = listItems
  const onUpdate = () => {
    updatedList(suggestion)
  }
  return (
    <li className="list">
      <p className="paragraph"> {suggestion}</p>
      <button className="btn" type="button" onClick={onUpdate}>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggstionItem
