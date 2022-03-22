import './App.scss';
import ListItems from './components/list-items/list-items';
import Receipt from './components/receipt/receipt';

function App() {
  const items = require('./mocks/items.json');
  return (

    <div className="sales-container">
      <div className="list">
        <h1>INPUT</h1>
        <ListItems items={items} />
      </div>
      <div className="receipt">
        <h1>OUTPUT</h1>
        <Receipt />
      </div>
    </div>
  );
}

export default App;