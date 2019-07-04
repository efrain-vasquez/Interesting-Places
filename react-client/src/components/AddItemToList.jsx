import React from 'react';

class AddItemToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      locationName: '',
      description: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { address, locationName, description  } = this.state;

    this.props.postData('/items', {
      address,
      locationName,
      description,
    });

    this.setState({
      address: '',
      locationName: '',
      description: '',
    });
  }

  render() {
    
    const { address, locationName, description } = this.state;
    const { addItem, postData } = this.props;
    return (
      <div>
        <label>
          address:{''}
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          locationName:{''}
          <input
            type="text"
            name="locationName"
            value={locationName}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          description:{''}
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>Add Interesting Place To Visit</button>
      </div>
    );
  }
}

export default AddItemToList;