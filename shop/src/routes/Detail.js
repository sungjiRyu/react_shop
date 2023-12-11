
import App, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';

// styled-components 사용
// 1. css파일 안열어도 됨(js파일에 컴포넌트로 저장)
// 2. 다른 js 파일을 간섭하지 않음
// 3. 로딩시간이 단축
let YellowBtn = styled.button`
  background : ${ props => props.bg }; 
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px
`
let NewBtn = styled.button(YellowBtn)

function Detail(props){

let [tab, setTab] = useState(0);

// useEffect
// 랜더링이 다 된 후 실행 => 랜더링을 먼저 보여주고 어려운 작업을 실행하는 등의 장점
// 어려운 연산, 서버에서 데이터 가져오기, 타이머 등
//Side Effect => 함수의 핵심기능과 상관없는 부가기능 에서 따움(왜 Effect?)

// 상품 수량 입력
let [quintity, setQuintity] = useState('');

useEffect(()=>{
//mount, update시 실행
// console.log('안녕');

if(isNaN(quintity) == true){
  alert('ㄴㄴ')
}


// 타이머 (실행할 코드, 밀리세컨드)
let timer = setTimeout(()=>{setdiscount(false)}, 2000);
// return 안의 함수는 useEffect 이전에 실행됨(cleanup function)
// 기존 타이머 제거해주세요 => 재랜더링해도 타이머 하나만 실행
// cleanup function 은 unmount시에도 실행됨

return () =>{
  clearTimeout(timer);
}

// mount  or [변수] <<< 이게 변할때 마다 실행(dependency가 없으면 update될때는 실행 x)
},[quintity])


// 재랜더링(update)을 위해 state 함수 생성
let [count, setCount] = useState(0);

// 할인창 상태
let [discount, setdiscount] = useState(true);



  // url parameter 값 가져오는 hook
  let {id} = useParams(); 

  let shoesId = props.shoes.find(function(x){
    return x.id == id;
  });

    return(
<div className="container">
    {discount == true ? <DiscountModal></DiscountModal> : null}
  <div className="row">
    {count}
    <button onClick={()=> setCount(count+1)}>변경</button>
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes' + (shoesId.id+1) + '.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{shoesId.title}</h4>
      <p>{shoesId.content}</p>
      <p>{shoesId.price}원</p>
      <input onChange={(e)=>{
        setQuintity(e.target.value);
      }}></input>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  <Nav variant="tabs"  defaultActiveKey="">
    <Nav.Item>
      <Nav.Link onClick={()=>setTab(0)} eventKey="link0" >버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>setTab(1)} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>setTab(2)} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent tab={tab}/>
 
</div> 
)
}
function TabContent({tab}){
// if (props.tab == 0){
//   return <div>내용0</div>
// }
// else if (props.tab == 1){
//   return <div>내용1</div>
// }
// else if (props.tab == 2){
//   return <div>내용2</div>
// }
return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
}
function DiscountModal(){
  return(
    <div className="alert alert-warning" >
      2초이내 구매시 할인
    </div>
  )

}

export default Detail;