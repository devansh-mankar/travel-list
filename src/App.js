import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [Items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems([...Items, item]);
  }

  function handleDeleteItems(id) {
    setItems((Items) => Items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((Items) =>
      Items.map((Item) =>
        Item.id === id ? { ...Item, packed: !Item.packed } : Item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItems={handleDeleteItems}
        Items={Items}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats Items={Items} />
    </div>
  );
}
