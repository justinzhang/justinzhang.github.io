import Layout from '../../components/layout';
import { getTeachingData, getAllTeachingIds } from '../../lib/teaching';
import Head from 'next/head';
import postsStyles from '../../styles/posts.module.css';
import { titleToKatex } from '../../lib/teaching';



export async function getStaticProps({ params }) {
    const teachingData = await getTeachingData(params.id);
    const teachingTitle = await titleToKatex(teachingData.title);
    // const teachingSemester = await titleToKatex(teachingData.semester)

    return {
      props: {
        teachingData,
        teachingTitle
      },
    };
  }

export async function getStaticPaths() {
  let paths = getAllTeachingIds();

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Teaching({ teachingData, teachingTitle}) {
    return (
      <Layout>
        <Head>
            <title>{teachingData.id}</title>
        </Head>
        <article>
        <section className={postsStyles.headingLg} dangerouslySetInnerHTML={{ __html: teachingTitle + "(" + teachingData.semester + ")"}}/>
          <div className={postsStyles.dateMd}>
            {teachingData.summary}
          </div>
        <section className={postsStyles.articleText}>
          <div className={postsStyles.blockshit}>&nbsp;</div>
          <div className={postsStyles.textMd} dangerouslySetInnerHTML={{ __html: teachingData.contentHtml }} />
        </section>
      </article>
      </Layout>
    );

    
  }


