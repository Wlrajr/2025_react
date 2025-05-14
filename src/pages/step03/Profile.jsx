// Profile.js (또는 Profile.jsx)
import Avatar from "./Avatar"; // Avatar 컴포넌트의 경로가 Profile.js와 같은 폴더에 있다고 가정합니다.

export default function Profile(props) {
    return (
        <ul>
            {/* person : 객체 */}
            <li>
                <Avatar size={100} person={{ name: 'hong', imageId: 'YfeOqp2' }} />
            </li>

            <li>
                <Avatar size={80} person={{ name: 'choi', imageId: 'OKS671h' }} />
            </li>

            <li>
                <Avatar size={60} person={{ name: 'jung', imageId: '1bX5QH6' }} />
            </li>

        </ul>
    );
}