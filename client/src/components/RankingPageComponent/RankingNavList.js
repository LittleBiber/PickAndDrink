import React from "react";

export default function RankingNavList({navList, getCategory}) {
  return (
    <li className='rankingListName' onClick={(e) => getCategory(e)}>{navList}</li>
  )
}