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
          Hello from Seattle! I'm currently building{" "}
          <a href="https://scrim.app">Scrim</a>, an esports tournament platform. Previously at Microsoft, on the
          Sway and Word Online team.
        </p>
        <small>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/adrianzlee">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/adrianlee">GitHub</a>
            </li>
            <li>
              <a href="mailto:jun.irok+blog@gmail.com">Email</a>
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
