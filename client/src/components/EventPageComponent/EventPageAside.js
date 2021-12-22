import React from "react";
import { useState } from "react";

export default function Aside({getStore}) {
  const store = ['전체', 'GS25', 'CU', '미니스톱', '이마트24', '세븐일레븐']

  const [currentTab, setCurrentTab] = useState(0)

  function selectTabHandler(e, idx) {
    getStore(e.target.textContent)
    setCurrentTab(idx)
  }



  return (
    <aside>
      <ul>
        {store.map((store, index) => {
          return (
<li key={index} className={currentTab === index ? 'submenu focused' : 'submenu'} onClick={(e) => selectTabHandler(e, index)}>
{store}
</li>
          )
        })}
      </ul>
    </aside>
  )
}