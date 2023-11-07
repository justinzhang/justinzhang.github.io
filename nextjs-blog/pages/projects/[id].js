import Layout from '../../components/layout';
import { getProjectData, getAllProjectIds } from '../../lib/projects';
import Head from 'next/head';
import Date from '../../components/date';
import postsStyles from '../../styles/posts.module.css';
import { titleToKatex } from '../../lib/projects';



export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    const projectTitle = await titleToKatex(projectData.title);

    return {
      props: {
        projectData,
        projectTitle,
      },
    };
  }

export async function getStaticPaths() {
  let paths = getAllProjectIds();

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData, projectTitle }) {
    return (
      <Layout>
        <Head>
            <title>{projectData.id}</title>
        </Head>
        <article>
        <section className={postsStyles.headingLg} dangerouslySetInnerHTML={{ __html: projectTitle}}/>
          <div className={postsStyles.dateMd}>
            {projectData.summary} ({projectData.date})
          </div>
        <section className={postsStyles.articleText}>
          <div className={postsStyles.blockshit}>&nbsp;</div>
          <div className={postsStyles.textMd} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </section>
      </article>
      </Layout>
    );
  }


