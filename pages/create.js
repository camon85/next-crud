import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Create() {
  return (
    <Container className="md-container">
      <Head>
        <title>create</title>
      </Head>
      <Container>
        <h1>
          create 
        </h1>
        <Link href={'/list'}>
          <Button variant="primary">list</Button>
        </Link>
        <Container>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Documentation</Card.Title>
                <Card.Text>
                  Find in-depth information about Next.js features and API.
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/docs">
                  More &rarr;
                </Button>
              </Card.Body>
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
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
  )
}
