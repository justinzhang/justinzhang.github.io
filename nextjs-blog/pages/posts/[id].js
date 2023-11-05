import Layout from '../../components/layout';
import { getPostData, getAllPostIds } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import postsStyles from '../../styles/posts.module.css';
import { titleToKatex } from '../../lib/posts';

const postTypes = ["posts"];

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const postTitle = await titleToKatex(postData.title);

    return {
      props: {
        postData,
        postTitle,
      },
    };
  }

export async function getStaticPaths() {
  let paths = getAllPostIds();

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, postTitle }) {
    // console.log(postTitle);
    return (
      <Layout>
        <Head>
            <title>{postData.id}</title>
        </Head>
        <article>
        <section className={postsStyles.headingLg} dangerouslySetInnerHTML={{ __html: postTitle}}/>
          <div className={postsStyles.dateMd}>
            <Date dateString={postData.date} />
          </div>
        <section className={postsStyles.articleText}>
          <div className={postsStyles.blockshit}>&nbsp;</div>
          <div className={postsStyles.textMd} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </article>
      </Layout>
    );
  }


