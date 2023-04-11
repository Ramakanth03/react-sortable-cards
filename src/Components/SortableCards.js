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
    return fetch("fakeData.json")
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
          <span style={{ width: "100%", wordWrap: "break-word" }}>
            {item.id}. {item.firstName} {item.lastName} {item.email}{" "}
            {item.gender}
          </span>
        </div>
      ))}
    </ReactSortable>
  );
};
export default SortableCards;
