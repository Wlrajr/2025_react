import ItemsList from "./Items";

export default function FindAdminCommentList(props) {
    const comments = [
    { name: "홍길동", comment: "방가방가", isAdmin:true },
    { name: "임걱정", comment: "방가방가", isAdmin:false },
    { name: "장산범", comment: "방가방가", isAdmin:true },
    { name: "일진", comment: "방가방가", isAdmin:true }
];
// find - 조건에 맞는 항목만 추출(조건을 만족하는 맨 처음 항목 추출)
// 조건을 만족하지 않는 경우를 생각해서 삼항 연산자를 사용한다
// 조건식 ? 참일때 : 거짓일때때
    const admin = comments.find(k=> k.isAdmin);
    return(
        <>
            <h2>관리자 리스트</h2>
            
                   { admin ? (
                    <ItemsList name={admin.name} comment={admin.comment} />
                   ) : (
                    <p>관리자 댓글 없음</p>
                    ) }
                
            
        </>
    );
}