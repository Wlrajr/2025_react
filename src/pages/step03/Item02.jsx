/* props : 인자, 매개변수, 파라미터 */
/* 태그안에서 1개 인자 호출출 : <li> {} </li> */
/* 태그안에서 1개 인자 호출출 : <li> {`문자열 ${}`} </li> */

/* function Item(props) {
    return (
        <>
            <ul>
                <li>과목 : {props.title} </li>
                <li>{`내용 : ${props.content}`} </li>
            </ul>
        </>
    );
}; */
function Item(props) {
    return (
        <>
            <ul>
                <li>과목 : {props.title} </li>
                <li>{`내용 : ${props.content}`} </li>
            </ul>
        </>
    );
};

export default Item;