

function NumberCount(props){
    let cnt = 5;
    let increment = () => {
        cnt=cnt+1;
        console.log("cnt : " , cnt=cnt+1);
    }
    return(
        <>
            {/* html처럼 보이는 jsx안에서 자바스크립트 코드나 변수를 사용하려면 {} 안에 넣어야한다. */}
            {/* 1. 변수출력 2. 연산식 3. 조건문 4. 함수호출*/}
            <button onClick={increment} 
            style={{margin:"0 20px", fontSize:"20px"}}>+</button>
            <span> {cnt} </span>
            <button style={{margin:"0 20px", fontSize:"20px"}}>-</button>
        </>
    )
}

export default NumberCount;