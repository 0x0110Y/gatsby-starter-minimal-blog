import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
//import "../styles/layout.css"

export default function About() {
  const intl = useIntl();
  const locale = intl.locale !== "en" ? `${intl.locale}` : "";
  let desc = "";
  if (intl.locale === "ja") {
    desc = "深夜12時、チャイムが鳴り、街の片隅にある食堂の時間が始まりました。これがJliceの食堂のレシピです。食べ物と愛だけがそれに応えられません。";
  } else if (intl.locale === "ko") {
    desc = "자정 12시, 종소리가 울리고, 도시의 한구석에서 식당을 위한 시간이 시작되었습니다. 이것이 Jlice의 식당의 비법입니다. 음식과 사랑만으로는 살 수 없습니다.";
  } else if (intl.locale === "zh") {
    desc = "午夜12点，报时钟响起，城市的一隅，属于一家食堂的时间开始了，这是Jlice食堂的中餐食谱，唯有美食与爱不可辜负。";
  } else {
    desc = "At 12 midnight, the bell rang, and the time for a cafeteria in a corner of the city began. This is the recipe of Jlice's cafeteria. Only food and love can't live up to it.";
  }
  return (
    <Layout className="about" title={intl.formatMessage({ id: "about" })}>
      <section className="page-content">
        <h1>{intl.formatMessage({ id: "about" })}</h1>
        <div className="page-text">
          <p>
            {desc}
          </p>
          {/* <div className="links">
            <h2>Links</h2>
            <ul>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/elvessousa/gatsby-intl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gatsby INTL - Github Repo
                </a>
              </li>
              <li>
                <a
                  href={`https://elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Elves Sousa - Portfolio
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}
