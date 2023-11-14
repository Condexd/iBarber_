// useDeleteItem.js
import { useState } from 'react';

const useDeleteItem = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const deleteItem = (itemId) => {
    const updatedItems = items.filter(item => item._id !== itemId);
    setItems(updatedItems);
  };

  return { items, deleteItem };
};

export default useDeleteItem;
