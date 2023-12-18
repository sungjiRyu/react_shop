import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeName } from "../store";


function Cart(){

// redux 를 설치하면
// redux store.js 라는 파일에 모든 state가 저장, 거기서 빼내서 쓰면됨

// Redux store 가져옴
// store 에 있던 모든 state가 state에 담김
let stock = useSelector((state)=>{ return state.stock })
let user = useSelector((state)=> state.user)
let dispatch = useDispatch()
console.log(stock);

    return(
        <div>
            {user.name}의 장바구니
                <Table>
                    <thead>
                        <tr>
                          <th>#</th>
                          <th>상품명</th>
                          <th>수량</th>
                          <th>변경하기</th>
                        </tr>
                    </thead>
               
                    <tbody>
            {        
            stock.map((a, i)=>{
                return(
                        <tr>
                          <td>{stock[i].id}</td>
                          <td>{stock[i].name}</td>
                          <td>{stock[i].count}</td>
                          <td>
                            <button onClick={()=>{
                                dispatch(addCount(stock[i].id))
                            }}>+</button>
                          </td>
                        </tr>
            )
        })
    }
    </tbody>
     </Table> 
    </div>
    )
}

export default Cart;