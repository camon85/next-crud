import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function ArticleDetail({ article }) {
  const handleDelete = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:8080/article/${article.id}`, {
      method: "DELETE",
    });

    const result = await res.json();

    if (result) {
      Router.push("/list");
    }
  };

  return (
    <Container className="md-container">
      <Head>
        <title>{article.id}</title>
      </Head>
      <Container>
        <h1>detail</h1>
        <Link href={"/list"}>
          <Button variant="primary">list</Button>
        </Link>
        <Container>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>
                  [{article.id}] {article.title}
                </Card.Title>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
              <Link href={article.id + "/edit"}>
                <Button variant="primary">edit</Button>
              </Link>
              <Button variant="primary" onClick={handleDelete}>
                delete
              </Button>
            </Card>
          </Row>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;
  try {
    const res = await fetch(`http://localhost:8080/article/${id}`);
    const article = await res.json();
    return {
      props: { article },
    };
  } catch (err) {
    console.error(err);
  }
};
