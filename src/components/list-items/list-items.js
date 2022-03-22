import React from 'react'
import './list-item.scss';
class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange(i) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div className="list-container">
                {this.props.items.map((item) => {
                    return <div key={item.id} className="list-item">
                        <h2>{item.itemName}</h2>
                        <p>$ {item.itemValue}</p>
                        <input type="number" min={0} max={99}
                            value={this.state.value}
                            onChange={this.handleChange}></input>
                        {this.state.value}
                    </div>
                })}

            </div >
        );
    }
}

export default ListItems;