import "./App.css";
import React, { Component } from "react";
import AddItem from "./Components/AddItem/AddItem";
import ItemsList from "./Components/ItemsList/ItemsList";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Aly", age: 29 },
      { id: 2, name: "Marah", age: 23 },
      { id: 3, name: "Naz", age: 20 },
    ],
  };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="header">Todo Application</h1>
        <ItemsList items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
export default App;
