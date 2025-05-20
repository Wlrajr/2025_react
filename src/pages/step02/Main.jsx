import NonUseCallBackEx from "../step16/NonUseCallBackEx";
import UseCallBackEx from "../step16/UseCallBackEx";


function Main(props){
    return(
        // 태그의 첫글자가 소문자이면 일반적인 html 태그, 대문자이면 컴포넌트
        <main>
            <h1>WelComa React</h1>
            <NonUseCallBackEx />
            <UseCallBackEx />
        </main>
    );
};

export default Main;