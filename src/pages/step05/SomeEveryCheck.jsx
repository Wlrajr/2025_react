export default function FindAdminComment() {
    const comment = [
        { name: "홍길동", comment: "방가방가가", isAdmin: true },
        { name: "임꺽정", comment: "방가방가가가", isAdmin: false },
        { name: "장길산", comment: "방가방가가가가", isAdmin: true },
        { name: "일지매매", comment: "방가방가가가가가가", isAdmin: false }
    ];

    /* some() : 배열에 하나라도 조건을 만족하는 요소가 있으면 true ( or 과 같음)
    Every() : 배열에 모든 요소를 만족하면  true ( ADN 과 같음)
    보통 삼항 연산자와 같이 사용용
 */
    const result1 = comment.some(k => k.isAdmin);
    const result2 = comment.some(k => k.isAdmin);

    return (
        <>
            <h2>관리자 댓글글</h2>
            <p>관리자 댓글 있냐? {result1 ? "있음" : "없음"} </p>
            <p>모두 관리자가 쓴 댓글이냐? {result2 ? "전부 관리자" : "일부관리자자"} </p>
        </>
    );
};