import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

// import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";

// mount whatever plugins you'd like to. These are the only current options.
// Sortable.mount(new MultiDrag(), new Swap());

const SortableCards = (props) => {
  const [state, setState] = useState([
    {
      id: 1,
      first_name: "Robinett",
      last_name: "Plaschke",
      email: "rplaschke0@yahoo.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Stanfield",
      last_name: "Tourot",
      email: "stourot1@timesonline.co.uk",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Kacey",
      last_name: "Wrighton",
      email: "kwrighton2@redcross.org",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Carline",
      last_name: "Troman",
      email: "ctroman3@mlb.com",
      gender: "Female",
    },
    {
      id: 5,
      first_name: "Fernande",
      last_name: "Slyne",
      email: "fslyne4@163.com",
      gender: "Female",
    },
    {
      id: 6,
      first_name: "Annelise",
      last_name: "Glennard",
      email: "aglennard5@taobao.com",
      gender: "Female",
    },
    {
      id: 7,
      first_name: "Delbert",
      last_name: "Jehan",
      email: "djehan6@facebook.com",
      gender: "Agender",
    },
    {
      id: 8,
      first_name: "Lula",
      last_name: "Bernucci",
      email: "lbernucci7@pen.io",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Jaynell",
      last_name: "McGaugan",
      email: "jmcgaugan8@theatlantic.com",
      gender: "Female",
    },
    {
      id: 10,
      first_name: "Jed",
      last_name: "Loker",
      email: "jloker9@ucoz.ru",
      gender: "Male",
    },
  ]);

  return (
    <ReactSortable
      className="sortableContainer"
      multiDrag={true} // enables mutidrag
      //   swap // enables swap
      list={state}
      setList={setState}
    >
      {state.map((item) => (
        <div className="card" key={item.id}>
          <span>
            {item.id} {item.first_name}
          </span>
        </div>
      ))}
    </ReactSortable>
  );
};
export default SortableCards;
