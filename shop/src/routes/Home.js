
import App, { useState } from 'react';
import data from '../data';
import axios from 'axios';

function Main(props){

  let [data, setData] = useState();

    return(
        
        <>
        <div className="main-bg" style={{backgroundImage : 'url('+props.bg+')' }}></div>
        <div className="container text-center">
        <div className="row align-items-start">
          {
              props.shoes.map((a,i)=>{
                  return(
                      <List shoes = {props.shoes[i]} i = {i} key = {i}></List>
                      )
                    })
                }
          </div>
          </div>
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
            console.log(result.data)
            console.log(props.shoes)
            props.setShoes(result);
            console.log(props.shoes)
              })
              .catch(()=>{
                console.log('실패함')
              })
             
            
          }}>버튼</button>
          </>
          )
        }

// 상품 목록 컴포넌트
function List(props){
    return (
            <div className="col" >
              <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="80%" />
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.price}</p>
        </div>
    )
  }

export default Main;