
function NumberCount(props){
   let cnt = 5 ;
   let increment = () =>{
      cnt = cnt + 1 ;
      console.log("cnt : " , cnt);
   }
    return(
        <>
          {/* html처럼 보이는 JSX안에서 JavaScript 코드나 변수를 사용하려면 {} 넣어야한다.*/}
          {/* 1. 변수출력  2. 연산식 3. 조건문(삼항연산자), 4.함수호출*/}
          <button onClick={increment} 
          // 스타일 반드시 {{}} 사용
          style={{ margin:"0 20px", fontSize:"20px"}}> + </button>   
          <span> {cnt} </span> 
          <button style={{ margin:"0 20px", fontSize:"20px"}}> - </button>
        </>
    );
}

export default NumberCount;