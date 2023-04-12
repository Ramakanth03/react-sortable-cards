import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Sortable, MultiDrag } from "sortablejs";
import InfiniteScroll from "react-infinite-scroll-component";

Sortable.mount(new MultiDrag());

const SortableCards = function () {
  const [total, setTotal] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 9999) setHasMore(false);
    if (items.length <= 9999) {
      setTimeout(() => {
        setItems(
          items.concat(total.slice(items.length + 1, items.length + 1000))
        );
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        setTotal(data);
        const records = data.slice(0, 1000);
        setItems(records);
      });
  };

  return (
    <div>
      <h1>Sortable Grid Of Cards</h1>
      <hr />
      <div id="scrollableDiv" style={{ height: 625, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
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
                  {item.id}. {item.firstName} {item.lastName} {item.email}
                  <br />
                  {item.gender}
                </span>
              </div>
            ))}
          </ReactSortable>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default SortableCards;
