
import App from 'react';
import { useParams } from 'react-router-dom';

function Detail(props){

  // url parameter 값 가져오는 hook
  let {id} = useParams(); 

  let shoesId = props.shoes.find(function(x){
    return x.id == id;
  });

    return(
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes' + (shoesId.id+1) + '.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{shoesId.title}</h4>
      <p>{shoesId.content}</p>
      <p>{shoesId.price}원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail;