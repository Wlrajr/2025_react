import Items from "../step05/Items";

export default function FilteredCommentList(props) {
    const comments = [
    { name: "홍길동", comment: "방가방가", isAdmin:true },
    { name: "임걱정", comment: "방가방가", isAdmin:false },
    { name: "장산범", comment: "방가방가", isAdmin:true },
    { name: "일진", comment: "방가방가", isAdmin:true }
];
//filter() - 조건에 맞는 항목만 필터링
    const filtered = comments.filter(k=> k.isAdmin);
    return(
        <>
            <h2>관리자 리스트</h2>
            {filtered.map((k,i)=>{
                return(
                    <Items key={i} name={k.name} comment={k.comment} />
                );
            })}
        </>
    );
}