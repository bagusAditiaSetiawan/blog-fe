import {Card, CardImg} from "react-bootstrap";
import Link from "next/link";

export function ItemPost({ post }) {
    return (
        <Link href={`/detail/${post.id}`}>
            <Card>
                <CardImg src={post.url_poster} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <p>{post.content}</p>
                </Card.Body>
            </Card>
        </Link>
    )
}
