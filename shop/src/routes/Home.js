
import axios from 'axios';
import App from 'react';


function Main(props){
  
  const shoes = props.shoes;

    return(
        
        <>
        <div className="main-bg" style={{backgroundImage : 'url('+props.bg+')' }}></div>
        <div className="container text-center">
        <div className="row align-items-start">
          {
              props.shoes.map((a,i)=>{
                  return(
                      <List shoes = {shoes[i]} i = {i} key = {i}></List>
                      )
                    })
                }
          </div>
          </div>
          <button onClick={getList}>버튼</button>
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
  function getList(props){
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      console.log(result.data)
      // let copy = [...props.shoes, ...result.data]
      // props.setShoes(copy);
    })
    .catch(()=>{
      alert('실패함')
    })
  }

  //post
  function postList(){
    axios.post('https://codingapple1.github.io/shop/data2.json', {name : 'kim'})
    // get 요청 여러개
    Promise.all([axios.get('/url1'), axios.get('/url2')])
    .then(()=>{})
    }
  

export default Main;