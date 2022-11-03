import Link from 'next/link'
import styles from '../styles/Header.module.css'
export default function Header() {
  return (
    <div class="shadow-sm">
      <header className={(styles.header)+' '+'container d-flex align-items-center p-3'}>
        <Link href="./" class="d-block w-25">ロゴとかいれる</Link>
        <h1 class="fs-6 m-0 ms-auto fw-bold"><small>h1説明文はこちらに</small></h1>
      </header>
    </div>
  )
}
