import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "" });

  // Fetch items from the API
  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Add a new item
  const addItem = () => {
    axios.post("http://localhost:5000/api/items", newItem)
      .then((response) => setItems([...items, response.data]))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>My Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default App;
