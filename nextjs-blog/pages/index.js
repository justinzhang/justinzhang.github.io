import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData, titleToKatex } from './../lib/posts';
import Date from '../components/date';


export async function getStaticProps() {

  let allPostsData = getSortedPostsData();

  for (let postData of allPostsData) {
    postData.title = await titleToKatex(postData.title);
  }
    
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingXl}>Justin Zhang</section>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I am a 5th Year CS Master's Student @ CMU, advised by Rashmi Vinayak in the TheSys group. 
          I am fascinated by errors in computation and the algebraic structures that allow us to reason about 
          fundamental limitations of correction. I am investigating the application of erasure codes in distributed 
          storage systems, and the applications of error correction in ring-LWE post quantum cryptography. My CV
        </p>
      </section>
      <section className={`${utilStyles.headingLg}`}>Writing</section>
      <section className={`${utilStyles.headingMd}`}>
        <ul className={utilStyles.list}>
  {allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
    <Link href={`/posts/${id}`} dangerouslySetInnerHTML={{ __html: title}}/>
    <small className={utilStyles.lightText}>
      <Date dateString={date} />
    </small>
    </li>
  ))}
</ul>
      </section>
    </Layout>
  );

}

