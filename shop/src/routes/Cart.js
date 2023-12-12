import { Table } from "react-bootstrap";

function Cart(){

// redux 를 설치하면
// redux store.js 라는 파일에 모든 state가 저장, 거기서 빼내서 쓰면됨

    return(
        <div>
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
                    <tr>
                      <td>1</td>
                      <td>안녕</td>
                      <td>안녕</td>
                      <td>안녕</td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;