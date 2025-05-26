import Head from 'next/head';
// import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Layout from '../component/layout';
 
export default function Home() {
  const siteTitle = 'Next Js Guru Blog'
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Live in the Future, Dominate like a master.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}