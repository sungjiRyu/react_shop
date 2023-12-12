
<<<<<<< HEAD
import App, { useState } from 'react';
import data from '../data';
import axios from 'axios';

function Main(props){

  let [data, setData] = useState();
=======
import axios from 'axios';
import App, { useState } from 'react';
import data from '../data';


function Main(props){
  
  let [shoes, setShoes] = useState(data);
>>>>>>> 73e1129777462db31f44675caec26618f12b7819

    return(
        
        <>
        <div className="main-bg" style={{backgroundImage : 'url('+props.bg+')' }}></div>
        <div className="container text-center">
        <div className="row align-items-start">
          {
              shoes.map((a,i)=>{
                  return(
                      <List shoes = {shoes[i]} i = {i} key = {i}></List>
                      )
                    })
                }
          </div>
          </div>
          <button onClick={()=>{
<<<<<<< HEAD
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
             
            
=======
            axios('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              let copy = [...shoes, ...result.data]
              setShoes(copy)
              console.log(shoes)
            })
            .catch(()=>alert('실패함'))

>>>>>>> 73e1129777462db31f44675caec26618f12b7819
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

// axios(get)
// function getList(props){

//   axios.get('https://codingapple1.github.io/shop/data2.json')
//   .then((result)=>{
//     console.log(result.data)
//     let copy = [...shoes, ...result.data]
//     setShoes(copy);
//     console.log(shoes)
//   })
//   .catch(()=>{
//     alert('실패함')
//   })
// }    
  

  //post
  function postList(){
    axios.post('https://codingapple1.github.io/shop/data2.json', {name : 'kim'})
    // get 요청 여러개
    Promise.all([axios.get('/url1'), axios.get('/url2')])
    .then(()=>{})
    }
  

export default Main;