import Head from "next/head";
import Link from "next/link";
import { Container, Row, Card, Button } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import fetcher from "../lib/fetcher";
import { useState } from "react";

const URL = "http://localhost:8080/article";

export default function List() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useSWR(shouldFetch ? URL : null, fetcher, {
    revalidateOnFocus: false,
  });

  function handleSearch() {
    setShouldFetch(true);
    mutate(URL); // 정확한 위치는 아닌것 같다
  }

  return (
    <Container className="md-container">
      <Head>
        <title>list</title>
      </Head>
      <Container>
        <h1>list</h1>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
        <Link href={"/create"}>
          <Button variant="primary">Create</Button>
        </Link>
        <Container>
          {data && data.length > 0
            ? data.map((article) => (
                <Row key={article.id} className="justify-content-md-between">
                  <Card className="sml-card">
                    <Card.Body>
                      <Card.Title>
                        [{article.id}] {article.title}
                      </Card.Title>
                      <Card.Text>{article.content}</Card.Text>
                    </Card.Body>
                    <Button variant="primary" href={"/" + article.id}>
                      detail
                    </Button>
                  </Card>
                </Row>
              ))
            : null}
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
  );
}
