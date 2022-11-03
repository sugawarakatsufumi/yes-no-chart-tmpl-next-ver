import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>トップ-YES-NOチャート</title>
        <meta name="description" content="スタートページ" />
      </Head>
      <section id="page-start">
        <div class="container ps-3 pe-3 pt-5">
          <h2 class="mb-5 text-center lh-base fw-bold">すきな食べ物は</h2>
          <div class="row">
            <div class="col-12 col-lg-6"><Link href="./page-case-mikan" class="btn btn-primary bg-gradient rounded-pill d-block py-4 mb-4 text-white">みかん</Link></div>
            <div class="col-12 col-lg-6"><Link href="./page-case-ringo" class="btn btn-primary bg-gradient rounded-pill d-block py-4 mb-4 text-white">りんご</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
