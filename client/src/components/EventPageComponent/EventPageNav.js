import React from "react";
import { useState } from "react";

export default function Nav({getEvent}) {
  const event = ['전체', '1 + 1', '2 + 1', '금액 할인']

  const [currentTab, setCurrentTab] = useState(0)

  function selectTabHandler(e, idx) {
    getEvent(e.target.textContent)
    setCurrentTab(idx)
  }

  return (
    <nav id='eventGroupContainer'>
        <ul id="eventGroup">
          {event.map((event, index) => {
            return (
<li key={index} className={currentTab === index ? 'submenu focused' : 'submenu'} onClick={(e) => selectTabHandler(e, index)}>
{event}
</li>
            )
          })}
        </ul>
      </nav>
  )
}