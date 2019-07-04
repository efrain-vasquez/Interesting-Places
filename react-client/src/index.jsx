import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import ListItem from './components/ListItem.jsx'
import AddItemToList from './components/AddItemToList.jsx'
import InterestingPlacesList from './components/InterestingPlacesList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this)
    this.getData = this.getData.bind(this)
    this.postData = this.postData.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  // the endpoint here must be the same one that is on the server
  componentDidMount () {
    this.getData('/items')
  }

  getData (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        })
      })
      .catch(err => console.error(err))
  }

  postData (url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getData(url))
      .catch(err => console.error(err))
  }

  addItem (address, locationName, description) {
    let { list } = this.state
    const newItem = {
      address,
      locationName,
      description
    }

    const existingIndex = list.findIndex(
      item => item.address === newItem.address
    )

    if (existingIndex === newItem.address) {
      alert('already exists!!!!!!!')

      this.setState({
        list
      })
    } else {
      list.push(newItem)
      this.setState({
        list
      })
    }
  }
  
  deleteItem (url = '', id = 0) {
    return fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(() => this.getData('/items'))
      .catch(err => console.error(err))
  }

  render () {
    const { list } = this.state
    return (
      <div>
        <h1>Places Of Interest:</h1>
        <AddItemToList addItem={this.addItem} postData={this.postData} />
        <InterestingPlacesList list={list} handleRemove={this.deleteItem} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
