import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updatedList = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchedList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card">
          <img
            className="google-image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-card">
            <div className="input-card">
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input-element"
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onSearch}
              />
            </div>
            <ul className="list-items">
              {searchedList.map(each => (
                <SuggestionItem
                  listItems={each}
                  key={each.id}
                  updatedList={this.updatedList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
