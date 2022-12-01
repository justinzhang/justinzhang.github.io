import Layout from '../../components/layout';
import { getPostData, getAllPostIds } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { titleToKatex } from '../../lib/posts';


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
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export default function Post({ postData, postTitle }) {
    console.log(postTitle);
    return (
      <Layout>
        <Head>
            <title>{postData.id}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingLg} dangerouslySetInnerHTML={{ __html: postTitle}}/>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    );
  }


