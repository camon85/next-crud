import Head from "next/head";
import Link from "next/link";
import { Container, Row, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import fetch from "isomorphic-unfetch";
import React, { useState } from "react";
import Router from "next/router";

export default function Edit({ article }) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:8080/article/${article.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
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
        <h1>edit</h1>
        <Link href={"/list"}>
          <Button variant="primary">list</Button>
        </Link>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-between">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Form.Group controlId="formBasicTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </Form.Group>
                  </Card.Title>
                  <Card.Text>
                    <Form.Group controlId="formBasicContent">
                      <Form.Label>Content</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                      />
                    </Form.Group>
                  </Card.Text>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Form>
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

export async function getServerSideProps({ query }) {
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
}
