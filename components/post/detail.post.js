import {Col, Image} from "react-bootstrap";
import styles from "./../../styles/front-layout/style.module.css";

export function DetailPost({post}) {
    return (
        <>
            <Col>
                <Image src={post.url_poster} className="img-fluid" />
                <div className="d-flex justify-content-between">
                    <h2 className={styles.productDetailTitle}>{post.title}</h2>
                    <small className={styles.productDetailTitle}>{post.post_category.name}</small>
                </div>
                <p>{post.content}</p>
                <p>Created By {post.creator.username}</p>
            </Col>
        </>
    );
};
