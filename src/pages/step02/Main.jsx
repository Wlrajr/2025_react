import { Profiler } from "react";
import List01 from "../step03/List01";
import List02 from "../step03/List02";
import CommentList from "../step04/CommentList";
import Counter from "./Counter";

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
            </main>
        </>
    );
};

export default Main;