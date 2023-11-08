import Stores from '@/features/stores/Stores'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nike - Encontre uma Loja</title>
      </Head>
      <main>
        <Stores />
      </main>
    </>
  )
}
