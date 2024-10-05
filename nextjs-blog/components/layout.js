import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Justin Zhang';
export const siteTitle = "Justin Zhang's Website";

export default function Layout({ children, home }) {
  return (<div>
    <div className={home ? styles.container : styles.revContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/zhangjustin.jpg"
              className={utilStyles.picture}
              alt=""
            />
            <div className={utilStyles.headingSm}>zhan3554 [at] purdue.edu</div>
            {/*empty container to create space*/}
            <div className={utilStyles.headingSm}><a href='/docs/cv.pdf'>My CV</a></div>
            <div className={utilStyles.headingXl}> &nbsp;</div>
            


          </>

        ) : (
          <>
          </>
        )}
      </header>
      <main>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossOrigin="anonymous"></link>
        {children}
        {(!home &&

          <Link href="/" className={styles.backToHome}>← Back to home</Link>
      )}
      </main>
      
    </div>
        { home ?
        <div className={styles.footer}><Link href="https://github.com/justinzhang/justinzhang.github.io" className={styles.backToHome}>Website Repo</Link></div>
          : <></>
        }
  </div>
  );
}