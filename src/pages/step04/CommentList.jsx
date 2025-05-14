import Comment from "./Comment";

const comments = [
    { name: "홍길동", comment: "방가방가" },
    { name: "임걱정", comment: "방가방가" },
    { name: "장산범", comment: "방가방가" },
    { name: "일진", comment: "방가방가" }
];

export default function CommentList(props) {
    return (
        <>
            <Comment name={"둘리"} comment={"호이호이"} />
            <Comment name={"도우너너"} comment={"호이호이"} />
            <Comment name={"오우"} comment={"호이호이"} />
            <Comment name={"안녕"} comment={"호이호이"} />

            {
                comments.map((k, i) => {
                    return (<Comment key={i} name={k.name} comment={k.comment} />)
                })
            }
        </>
    );
};