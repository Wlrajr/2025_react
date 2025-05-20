import Comment from "./Comment";

// 배열 => 나중에는  DB
const comments = [
    {name:"홍길동", comment:"방가 방가"},
    {name:"임꺽정", comment:"하이~~~"},
    {name:"장길산", comment:"헬로~~~"},
    {name:"일지매", comment:"안녕하세요"},    
];

export default function CommentList(props){
    return(
        <>
          <Comment name={"둘리"} comment={"호이호이"}/>   
          <Comment name={"도우너"} comment={"깐따비야"}/>
          <Comment name={"희동이"} comment={"응애~~"}/>
          <Comment name={"마이콜"} comment={"라면은 맛있어"}/>
 
            {
                // map 를 사용할때는 반드시  key가 있어야 한다.
                // 배열일 경우  보통은 index 를 사용하지만 , 중복되지않는값을 사용하면 된다.
                comments.map((k, i)=>{
                return(
                    <Comment key={i} name={k.name} comment={k.comment}/>
                    )
                })
            
            }
        </>
    );
}