import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { changeLocale } from "gatsby-plugin-intl";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Post({ data }) {
  const { html, frontmatter: post } = data.markdownRemark;
  useEffect(() => {
    if (post.lang !== "en") {
      changeLocale(post.lang);
    }
  }, [post.lang]);

  return (
    <Layout title={post.title}>
      <Helmet>
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Recipe",
                "author": {
                  "@type": "Person",
                  "name": "Jlice"
                },
                "image": "https://jlice.gatsbyjs.io/img/post/${post.folder}/done.png",
                "name": "${post.name}",
                "recipeCategory": "${post.recipeCategory}",
                "recipeCuisine": "${post.recipeCuisine}",
                "recipeIngredient": "${post.recipeIngredient}",
                "dataPublished": "${post.date}",
                "description": "${post.description}",
                "keywords": "${post.keywords}"
              }
            `}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5991012621535339"
          crossorigin="anonymous"></script>
      </Helmet>
      <article className="post-content">
        <h1>{post.title}</h1>
        <div className="post-text" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        lang
        title
        name
        description
        keywords
        recipeCategory
        recipeCuisine
        recipeIngredient
        folder
      }
      timeToRead
    }
  }
`;
