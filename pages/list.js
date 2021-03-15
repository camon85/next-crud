import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button } from 'react-bootstrap'
import useFetchPokemon from '../lib/useRequest'

export default function List() {
  const { data, error } = useFetchPokemon()
  if (error) { 
    return <div>ERROR...</div>; 
  } 
  if (!data) { 
    return <div>Loding...</div>; 
  }
  
  return (
    <Container className="md-container">
      <Head>
        <title>list</title>
      </Head>
      <div>
        {data && data.results
          ? data.results.map(pokemon => (
              <p key={pokemon.name}>
                  <a>{pokemon.name}</a>
              </p>
            ))
          : 'loading...'}
      </div>
      <Container>
        <h1>
          list 
        </h1>
        <Button variant="primary">Clear</Button>
        <Button variant="primary">Search</Button>
        <Link href={'/create'}>
          <Button variant="primary">Create</Button>
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