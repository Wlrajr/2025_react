
export default function ReduceComment() {
    const comment = [
        { name: "홍길동", comment: "방가방가가", isAdmin: true },
        { name: "임꺽정", comment: "방가방가가가", isAdmin: false },
        { name: "장길산", comment: "방가방가가가가", isAdmin: true },
        { name: "일지매매", comment: "방가방가가가가가가", isAdmin: true }
    ];

    // reduce()는 배ㅔ열의 각 요소를 순회하며 누적값을 계산하는 메소드

    const admin = comment.reduce((acc, k)=>{
            acc.total += 1; // 순회 횟수 증가
            if (k.isAdmin) {
                acc.adminCount += 1;
            }
            return acc;
    },
    {total: 0, adminCount: 0}
);
    return (
        <>
            <h2>관리자 댓글 통계</h2>
            <p>전체 댓글 수 : {admin.total}</p>
            <p>관리자자 댓글 수 : {admin.adminCount} </p>
            
        </>
    );
};