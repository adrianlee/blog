import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
      <section className={utilStyles.headingMd}>
        <p>
          I'm <strong>Adrian</strong>, a full-time indie app developer based in
          Seattle. I am currently building{" "}
          <a href="https://scrim.app">Scrim.app</a>.
        </p>
        <small>
          <ul>
            <li>
              <a href="mailto:jun.irok+blog@gmail.com">
                jun.irok+blog@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/adrianlee">
                <strong>github</strong>.com/adrianlee
              </a>
            </li>
            <li>
              <a href="https://instagram.com/irok">
                <strong>instagram</strong>.com/irok
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/adrianzlee">
                <strong>linkedin</strong>.com/in/adrianzlee
              </a>
            </li>
          </ul>
        </small>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.dateText}>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={utilStyles.boxLink}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
