import { Profiler } from "react";
import List01 from "../step03/List01";
import List02 from "../step03/List02";
import CommentList from "../step04/CommentList";
import Counter from "./Counter";
import FilteredCommentList from "../step05/FilteredCommentList";
import FilteredCommentList2 from "../step05/FilteredCommentList2";
import FindAdminCommentList from "../step05/FindAdminCommentList";
import FindAdminCommentList2 from "../step05/FindAdminCommentList2";
import ReduceComment from "../step05/ReduceComment";
import SomeEveryCheck from "../step05/SomeEveryCheck";

function Main(props){
    return(
        //태그의 첫글자가 소문자면 일반적인 html태그, 대문자이면 jsx 컴포넌트 
        <>
            <main>
                <h2>Welcome React</h2>
                <Counter />
                <List01 />
                <List02 />
                <Profiler />
                <CommentList />
                <FilteredCommentList />
                <FilteredCommentList2 />
                <FindAdminCommentList />
                <FindAdminCommentList2 />
                <ReduceComment />
                <SomeEveryCheck />
            </main>
        </>
    );
};

export default Main;