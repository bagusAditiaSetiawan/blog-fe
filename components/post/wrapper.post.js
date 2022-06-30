import {Col} from "react-bootstrap";
import {ItemPost} from "./item.post";

export default function WrapperPost({ children, posts }) {
    return (
        <>
            {posts.map((post) => (
                <Col md={4} key={post.id}>
                    <ItemPost post={post} />
                </Col>
            ))}
        </>
    )
}