import React from 'react'
import './App.scss';
import ListItems from './components/list-items/list-items';
import Receipt from './components/receipt/receipt';

class App extends React.Component {

  state = {
    items: [],
    newName: '',
    newValue: '',
    newTax: '',
  }

  componentDidMount() {
    const itemsMock = require('./mocks/items.json');
    this.setState({ items: itemsMock });
  }

  addNewItem(itemName, itemValue, itemTax) {
    const items = this.state.items;

    if (itemName !== '' && itemValue !== 0 && itemTax !== 0)
      items.push({

        "id": items.length,
        "itemName": itemName,
        "itemValue": Number.parseInt(itemValue, 10),
        "selectedAmount": 0,
        "sumUntaxed": 0,
        "sumtaxed": 0,
        "tax": Number.parseInt(itemTax, 10)

      })

    this.setState({
      items: items,
      newName: '',
      newValue: '',
      newTax: '',
    })
  }

  handleNewName(event) {
    let modName = event.target.value;

    this.setState({ newName: modName });
  }

  handleNewValue(event) {
    let modValue = event.target.value;

    this.setState({ newValue: modValue });
  }
  handleNewTax(event) {
    let modValue = event.target.value;

    this.setState({ newTax: modValue });
  }

  handleSelectedAmount(e) {
    console.log('e', e)
  }
  render() {

    const list = this.state.items.map((item, i) => {
      return (<div className='list-content' key={item.id}>
        <ListItems item={item} />
        <input type="number" min={0} max={99}
          onChange={this.handleSelectedAmount}></input>
      </div>)
    })

    const newItem = <div className='new-item-container'>
      <input id='newItemName' placeholder='New Item Name' type="text" value={this.state.newName} onChange={this.handleNewName.bind(this)} required ></input>
      <div className='values-container'>
        <input id='newItemValue' placeholder='New Item Value' type="number" value={this.state.newValue} onChange={this.handleNewValue.bind(this)} step='any' min={0}
          required></input>
        <input id='newItemtax' placeholder='New Item Tax %' type="number" value={this.state.newTax} onChange={this.handleNewTax.bind(this)} step='any' min={0}
          required></input>
      </div>
      <button id='addNewItem' onClick={(e) => {
        this.addNewItem(this.state.newName, this.state.newValue, this.state.newTax)
      }}>+</button>
    </div >


    return (
      <div className="sales-container" >
        <div className="list">
          <h1>INPUT</h1>
          <div className='header'>
            <h2>Name</h2>
            <h2>Value</h2>
            <h2>Tax</h2>
            <h2>Amount</h2>
          </div>
          <>
            {list}
          </>
          <>
            {newItem}
          </>
        </div>
        <div className="receipt">
          <h1>OUTPUT</h1>
          <Receipt />
        </div>
      </div>
    );
  }
}
export default App;