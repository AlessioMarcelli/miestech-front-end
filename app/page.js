import Head from 'next/head'

export default function Home() {
  return (
      <>
        <Head>
          <title>Work in Progress</title>
          <meta name="description" content="Il sito è in fase di sviluppo" />
        </Head>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <h1>Work in Progress</h1>
          <p>Il sito è attualmente in fase di sviluppo, sarà presto online!</p>
        </div>
      </>
  )
}
