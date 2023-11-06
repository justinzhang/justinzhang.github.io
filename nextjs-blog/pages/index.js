import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData, titleToKatex } from './../lib/posts';
import Date from '../components/date';

const postTypes = ["Posts", "Presentations"];

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
  let postList = [];

  // for (let postType of postTypes) {
  //   postList.push(
  //     <section className={`${utilStyles.headingLg}`}> {postType}
  //       <section className={`${utilStyles.headingMd}`}>
  //       <div className={utilStyles.blockshit}>&nbsp;</div>
  //         <ul className={utilStyles.list}>
  //           {allPostsData[postType].map(({ id, date, title }) => (
  //             console.log(id),
  //           <li className={utilStyles.listItem} key={id}>
  //           <Link href={`/${postType}/${id}`} dangerouslySetInnerHTML={{ __html: title}}/>
  //           <small className={utilStyles.lightText}>
  //             <Date dateString={date} />
  //           </small>
  //           </li>
  //         ))}
  //         </ul>
  //       </section>
  //     </section>
  //   )
  // }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingXl}>Justin Zhang</section>
      <section className={utilStyles.paragraphVert}>
        <p className={utilStyles.p}>
          Hi! I am a 5th Year CS Master's Student @ CMU, advised by <a href='https://www.cs.cmu.edu/~rvinayak/#group'>Rashmi Vinayak</a> in the TheSys group. 
          I am fascinated by errors in computation and the algebraic structures that allow us to reason about 
          fundamental hardness of correction. I am investigating the application of erasure codes in distributed 
          storage systems through the convertible codes framework, a related, exciting subarea similar to the node-repair problem! 
          Concurently, I have also started studying the fascinating use of LWE and lattices in post-quantum cryptography under the guidance of <a href="https://sites.google.com/view/aayushjain/home">Aayush Jain</a>.
        </p>
          

        <p>
          Outside of math, my hobbies are running, pushing buggies, and learning languages. I help run a volunteer organization called <a href='https://www.ueaa.org/fun-fun-saturday/'>Fun Fun Saturday</a> in New York City's Chinatown
          where we offer a large variety of classes to recent immigrant children. If you are interested in teaching a class, please reach out to me!
        </p>
      </section>
      

      <section className={`${utilStyles.headingLg}`}> Posts
        <section className={`${utilStyles.listItemFormat}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
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
      </section>
      
    </Layout>
  );

}

