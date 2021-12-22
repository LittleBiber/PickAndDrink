import React, {useState, useEffect} from 'react';
import './Itemranking.css'
// import { items } from '../../assets/dummyData'
import RankItem from '../MainPageComponent/RankItem'
import RankingNavList from './RankingNavList';
import axios from 'axios';

export default function Itemranking () {
  const navList = ['전체', '탄산음료', '커피', '건강음료', '유제품', '전통음료','물', '과채음료']
  
  const [curCategory, setCurcategory] = useState('전체')
  const [firstItem, setFirstItem] = useState([])

  function getCategory(e) {
    setCurcategory(e.target.textContent)
  }

  useEffect(() => {
    
    if(curCategory === '전체') {
      let categoryArr = []
      let tmpList = navList.slice(1)

      tmpList.map((categoryName) => {
        axios.get(`https://localhost:8443/item?category=${categoryName}`)
        .then((res) => {
          categoryArr.push(res.data.data[0])
          return categoryArr
        })
        .then((res) => {
          if(res.length === navList.length-1) {
            setFirstItem(res)
          }
        })
      })
    } else {
      axios.get(`https://localhost:8443/item?category=${curCategory}`)
      .then((res) => {
        setFirstItem(res.data.data.slice(1,4))
      })
    }
  }, [curCategory])

  return (
    <div id='item-ranking-body'>

      <nav id='ranking-nav'>
        <ul className='ranking-ul'>
            {navList.map((navList) => {return (<RankingNavList getCategory={getCategory} navList={navList}/>)})}
        </ul>
      </nav>

        <section id="ranking-Container">
          {/* <article className="guide">
              <h1>...총 몇개의 상품이 있습니다.</h1>
          </article> */}

          <div className='rankList'>
          {firstItem.map((item) => <RankItem curCategory={curCategory} key={item.id} item={item} />)}
          </div>
        </section>

  </div>
  );
}