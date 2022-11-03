import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'

export default function PageCaseMikan() {
  return (
    <>
      <Head>
        <title>みかんのケース-YES-NOチャート</title>
        <meta name="description" content="みかんのケース" />
      </Head>
      <section id="page-case-mikan">
        <div class="container ps-3 pe-3 pt-5">
          <h2 class="mb-5 text-center lh-base fw-bold">さらにすきな食べ物は(みかんからきた)</h2>
          <div class="row">
            <div class="col-12 col-lg-6"><Link href="./page-has-red" class="btn btn-primary bg-gradient rounded-pill d-block py-4 mb-4 text-white">いちご</Link></div>
            <div class="col-12 col-lg-6"><Link href="./page-ans-orange" class="btn btn-primary bg-gradient rounded-pill d-block py-4 mb-4 text-white">マンゴー</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
