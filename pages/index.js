import {useState, useEffect} from "react"
import FrontLayout from "../components/layouts/front.layout";
import {Container, Row} from "react-bootstrap";
import styles from "./../styles/front-layout/style.module.css";
import WrapperPost from "../components/post/wrapper.post";
import {getPostContents} from "../functions/post-content.function";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
      const {data} = await getPostContents(1, 6);
      setPosts(data.data);
  }, []);

  return (
      <FrontLayout>
          <Container>
              <Row className="mt-3">
                  <h2 className={styles.textTitle} >Postingan Terbaru</h2>
                 {posts && (
                    <WrapperPost posts={posts} />
                 )}
              </Row>
          </Container>

      </FrontLayout>
  )
}
