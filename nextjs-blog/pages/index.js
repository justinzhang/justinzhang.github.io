import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData, titleToKatex } from './../lib/posts';
import { getSortedProjectData } from '../lib/projects';
import Date from '../components/date';
import { motion } from 'framer-motion';
import { vi } from 'date-fns/locale';
import { useState } from 'react';
import { set } from 'date-fns';

const postTypes = ["Posts", "Presentations"];

export async function getStaticProps() {

  let allPostsData = getSortedPostsData();
  let allProjectData = getSortedProjectData();

  for (let postData of allPostsData) {
    postData.title = await titleToKatex(postData.title);
  }

  for (let projectData of allProjectData) {
    projectData.title = await titleToKatex(projectData.title);
  }

  return {
    props: {
      allPostsData,
      allProjectData,
    },
  };
}

export default function Home({ allPostsData, allProjectData }) {

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

  let presentations = [{ title: "On the Selberg Sieve", date: "October 2023", id:"selberg", link: "/presentations/Arithmetic.pdf"},
                        { title: "Coding Theory and Applications to Storage Systems", date: "May 2023", id: "coding-theory", link: "https://docs.google.com/presentation/d/1hN3y1v0eISPhWRdYFkJjnzSvrAD4_s2l4gR4GtQpVmU/edit?usp=sharing" },
                        { title: "Matrix Approximations for Recommender Systems on TPUs", date: "May 2022", id:"tpu", link: "https://symposium.foragerone.com/meeting-of-the-minds-2022/presentations/46003"},
                        
                      ]
  
  const [hovered, setHovered] = useState(false);
  return (
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div 
        onHoverStart={() => {setHovered(true)}}
        onHoverEnd={() => {setHovered(false)}}
        transition={{ duration: 0.5 }}
      >

      <section className={utilStyles.headingXl}>
          <motion.span
            animate={{ opacity: 1, color: hovered ? ['#e3dbdb','#C41230'] : ['#C41230','#e3dbdb'] , transition: {duration: 1}}}
          >
            J
          </motion.span ><motion.span animate={{color: hovered ? ['#e3dbdb','#000000'] : ['#000000','#e3dbdb'], transition: {duration: 1}}}>ustin </motion.span>
          
          <motion.span
            initial={{ color: "white"}}
            animate={{ color: hovered ? ['#e3dbdb','#cfb991'] : ['#cfb991','#e3dbdb'], transition: {duration: 1} }}
           
          >
            Z
          </motion.span><motion.span animate={{ color: hovered ? ['#e3dbdb','#000000'] : ['#000000','#e3dbdb'], transition: {duration: 1} }}>hang </motion.span>
          </section> 

      </motion.div>

      <section className={utilStyles.paragraphVert}>
        
        <p className={utilStyles.p}>
          Hi! I am a 5th Year CS Master's Student @ CMU, advised by <a href='https://www.cs.cmu.edu/~rvinayak/#group'>Rashmi Vinayak</a> in the TheSys group. 
          I am fascinated by errors in computation and the algebraic structures that allow us to reason about 
          fundamental hardness of correction. I am investigating the application of erasure codes in distributed 
          storage systems through the convertible codes framework, a related, exciting subarea similar to the node-repair problem! 
        </p>

        <p className={utilStyles.p}>
          I was previously a SWE intern at Goldman Sachs in 2022, where I worked on the permissions streaming engine with the systems engineering team.
          This summer 2024, I will be joining Amazon as a SDE intern in Seattle, and in the fall, I will be heading to Purdue University to pursue a PhD in Computer Science!
        </p>
          

        {/* <p>
          Outside of math, my hobbies are running and pushing buggies (<a href='https://www.cmu.edu/buggy/'>a CMU tradition</a>) for Fringe. I also help run a volunteer organization called <a href='https://www.ueaa.org/fun-fun-saturday/'>Fun Fun Saturday</a> in New York City's Chinatown
          where we offer a large variety of classes to recent immigrant children ages 8-13. If you are interested in teaching a class, please reach out to me!
        </p> */}
      </section>


      <section className={`${utilStyles.headingLg}`}> Projects
        <section className={`${utilStyles.listItemFormat}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {allProjectData.map(({ id, date, title, summary }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/projects/${id}`} dangerouslySetInnerHTML={{ __html: title}}/>
            <small className={utilStyles.lightText}>{summary} ({date}) </small>
            </li>
          ))}
          </ul>
        </section>
      </section>
     
      <section className={`${utilStyles.headingLg}`}> Presentations
        <section className={`${utilStyles.listItemFormat}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {presentations.map(({ title,date,link,id}) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={link} dangerouslySetInnerHTML={{ __html: title}}/>
            
            <small className={utilStyles.lightText}>
               {" (" + date})
            </small>
            </li>
          ))}
          </ul>
        </section>
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
      
    </Layout>);

}

