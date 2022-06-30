import {Container, Row} from "react-bootstrap";
import FrontLayout from "../../components/layouts/front.layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {DetailPost} from "../../components/post/detail.post";
import {getPostContentById} from "./../../functions/post-content.function";

function ProductDetail() {
    const {id}  = useRouter().query;
    const [postId, setPostId] = useState(0);
    const [post, setPost] = useState({});

    useEffect(() => {
        setPostId(id);
    }, [id]);

    useEffect(async () => {
        if(postId) {
            const res = await getPostContentById(postId);
            setPost(res.data);
        }
    }, [postId]);
    return (
        <FrontLayout>
            <Container>
                {post && post.id && (
                    <Row className="mt-3">
                        <DetailPost post={post} />
                    </Row>
                )}
            </Container>
        </FrontLayout>
    )
}
export default ProductDetail
