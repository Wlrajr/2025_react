// Avatar.js (또는 Avatar.jsx)

// getImageUrl은 컴포넌트 외부에 선언하여 불필요한 재생성을 막을 수 있습니다.
// 이 값은 변하지 않는 상수이므로 컴포넌트 렌더링과 무관하게 한번만 정의되면 됩니다.
const getImageUrl = "https://i.imgur.com/";

export default function Avatar(props) {
    return (
        <img
            src={getImageUrl + props.person.imageId + ".jpg"}
            alt={props.person.name}
            width={props.size}
            height={props.size}
        />
    );
}