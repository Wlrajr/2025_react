import Items from "./Items";


export default function FindAdminComment() {
    const comment = [
        { name: "홍길동", comment: "방가방가가", isAdmin: true },
        { name: "임꺽정", comment: "방가방가가가", isAdmin: false },
        { name: "장길산", comment: "방가방가가가가", isAdmin: true },
        { name: "일지매매", comment: "방가방가가가가가가", isAdmin: false }
    ];

    // find - 조건에 맞는 항목만 추출(조건을 만족하는 맨 처음 항목 추출)
// 조건을 만족하지 않는 경우를 생각해서 삼항 연산자를 사용한다
// 조건식 ? 참일때 : 거짓일때때
    const admin = comment.find(k => k.isAdmin);

    return (
        <>
            <h2>관리자 댓글글</h2>
            {comment
            .find(k => k.isAdmin) 
            ? (<Items key={admin.name} name={admin.name} comment={admin.comment} />
            ) : (
                <p>댓글이 없습니다</p>
            )}
        </>
    );
};