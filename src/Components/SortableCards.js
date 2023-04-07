import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Sortable, MultiDrag } from "sortablejs";

Sortable.mount(new MultiDrag());

const SortableCards = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  return (
    <ReactSortable
      className="sortableContainer"
      multiDrag
      list={items}
      setList={setItems}
      selectedClass="sortable-selected"
    >
      {items.map((item) => (
        <div className="card" style={{ cursor: "move" }} key={item.id}>
          <span>
            {item.id}. {item.title}
          </span>
        </div>
      ))}
    </ReactSortable>
  );
};
export default SortableCards;
