import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData, titleToKatex } from '../lib/posts';
import { getSortedProjectData } from '../lib/projects';
import { getSortedTeachingsData } from '../lib/teaching';
import Date from '../components/date';
import { motion } from 'framer-motion';
import { vi } from 'date-fns/locale';
import { useState } from 'react';
import { set } from 'date-fns';

const postTypes = ["Posts", "Presentations"];

export async function getStaticProps() {

  let allPostsData = getSortedPostsData();
  let allProjectData = getSortedProjectData();
  let allTeachingData = getSortedTeachingsData();

  for (let postData of allPostsData) {
    postData.title = await titleToKatex(postData.title);
  }

  for (let projectData of allProjectData) {
    projectData.title = await titleToKatex(projectData.title);
  }

  for (let teachingData of allTeachingData) {
    teachingData.title = await titleToKatex(teachingData.title);
  }

  return {
    props: {
      allPostsData,
      allProjectData,
      allTeachingData,
    },
  };
}

export default function Home({ allPostsData, allProjectData, allTeachingData }) {

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

  let presentations = [
                        // { title: "Coding Theory and Applications to Storage Systems", date: "May 2023", id: "coding-theory", link: "https://docs.google.com/presentation/d/1hN3y1v0eISPhWRdYFkJjnzSvrAD4_s2l4gR4GtQpVmU/edit?usp=sharing" },
                        // { title: "Matrix Approximations for Recommender Systems on TPUs", date: "May 2022", id:"tpu", link: "https://symposium.foragerone.com/meeting-of-the-minds-2022/presentations/46003"},
                        // {title: "Secure Convertible Codes (Draft)", date: "Dec 2024", id: "masters", link: "/papers/SecureConvertibleCodesJustinzThesisDraft.pdf", authors: "Justin Zhang and Rashmi Vinayak"},
                        {title: "Amortized Locally Decodable Codes", date: "Jan 2025", id: "aLDC", link: "https://arxiv.org/abs/2502.10538", authors: "Jeremiah Blocki and Justin Zhang"}
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
        <p className={utilStyles.phone}>
        Email: zhan3554 [at] purdue.edu
         
        </p>

        <p className={utilStyles.phone}><a href='/docs/cv.pdf'>My CV</a></p>
        
        <p className={utilStyles.p}>
          Hi! I am a first year CS PhD student at Purdue University advised by  <a href="https://www.cs.purdue.edu/homes/jblocki/">Jeremiah Blocki</a>. 
          Previously, I completed my CS BS + MS at Carnegie Mellon University, where I was advised by <a href='https://www.cs.cmu.edu/~rvinayak/#group'>Rashmi Vinayak</a>.
        </p>

        <p className={utilStyles.p}>
         My research interests lie in the intersection of coding theory and cryptography. 
         What are the fundamental trade-offs between security and fault tolerance? 
         Moreover, what assumptions permit cryptography to be beneficial in coding theory and vice versa?
        </p>
          
      </section>


      {/* <section className={`${utilStyles.headingLg}`}> Projects
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
      </section> */}
     
      <section className={`${utilStyles.headingLg}`}> Research
        <section className={`${utilStyles.listItemFormat}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {presentations.map(({ title,date,link,id,authors}) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={link} dangerouslySetInnerHTML={{ __html: title}}/>
            <small className={utilStyles.lightText}>
               {" (" + date + ")"} 
            </small>
          
            <p></p>
            <small className={utilStyles.lightText}>
                {authors}
            </small>
               
            
            </li>
          ))}
          </ul>
        </section>
      </section>
      


      {<section className={`${utilStyles.headingLg}`}> Teaching
        <section className={`${utilStyles.listItemFormatWider}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {allTeachingData.map(({ id, date, title }) =>(
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/teaching/${id}`} dangerouslySetInnerHTML={{ __html: title}}/>
            </li>
          ))}
          </ul>
        </section>
      </section>}
      
    </Layout>);

}

