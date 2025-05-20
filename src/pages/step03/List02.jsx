import Item02 from "./Item02";

function List02(props){
    return(
        <>
            <div>
                <h3>강의목록 2 </h3>
                <Item02 title="HTML&CSS 입문" content="웹 개발에 필요한 기본 지식을 배웁니다."/>
                <Item02 title="SPRINGBOOT 입문" content="자바기반의 SpringBoot의 기본 지식을 배웁니다."/>
                <Item02 title="REACT 입문" content="React 기반의 기본 지식을 배웁니다."/>
            </div>
        </>
    );
}

export default List02 ;