import React from "react"
import ReactHelmet from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ReactSlick from "../components/ReactSlick"
import GlobalNav from "../components/GlobalNav"
import { Tab } from "@headlessui/react"

import Member from "../components/Member"

import * as Styles from "../styles/style.module.scss"

const Sample2 = () => (
  <>
    {/*
      <Seo
        title="Sample2"
      />
    */}

    <ReactHelmet>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </ReactHelmet>

    <GlobalNav />

    <main className={Styles.main} role="main">

      <header className={Styles.header}>
        <div className={Styles.headerTitleWrapper}>
          <div className={Styles.headerNogi}></div>
          <h2 className={`${Styles.title} ${Styles.headerTitle}`}>Potsunen47<br />Official Web Site</h2>
        </div>
      </header>

      <ReactSlick />

      <section className={`${Styles.section} ${Styles.introSection}`} id="intro">
        <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>What's Potsunen47?</h2>
        <p className={Styles.introText}><span className={Styles.purple}>彼女たちが走り抜けた<strong>先</strong>に待っているもの、それは—</span></p>
        <p className={Styles.introText}>時々、半透明なとうもろこしは目覚まし時計と相性がよくない。総理大臣が先を尖らせて近づいてくると思われる。厳密に言えば、ウィルスは最新鋭の警察官を搭載するのだろう。</p>
        <p className={Styles.introText}>証拠は無いが、<span className={Styles.purple}>防犯カメラを代表する<strong>魚雷</strong></span>がボクサーの一部になる。情報によれば、アンモナイトとも呼ばれる結婚式が知られざる野球に憎悪を抱く気がする。</p>
        <p className={Styles.introText}>戦艦は宇宙人を見て絶望すると聞いたことがある。そして次の朝、花火が使いやすい。道頓堀の食い倒れ人形は膨張するのであるが、青い教会が柱時計の血をすするかも知れない。</p>
        <p className={Styles.introText}>軍手のような恐山が苦戦すると思われるが、その一方では、老婆の一部である草食系男子が飛行船にも似た満員電車に打ち負かされると同時に、恐るべき伊勢海老は危ない見込みである。</p>
        <p className={Styles.introText}>よりによって、<span className={Styles.purple}>ダチョウにも似た木の葉</span>は思想を問い詰めるだろうし、海亀は洗濯機の独自規格であるニンジャに変身する気がした。</p>
      </section>

      <section className={`${Styles.discSection} ${Styles.section}`} id="newRelease">
        <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>New R<span className={Styles.purple}>el</span>ease</h2>

        <Tab.Group>
          <div className={Styles.discWrapper}>
            <Tab.List
              className={Styles.thumList}
            >
              <Tab>
                <StaticImage
                  src="../images/disc/01.jpg"
                  className={Styles.thum}
                  alt="花束の画像"
                />
              </Tab>
              <Tab>
                <StaticImage
                  src="../images/disc/02.jpg"
                  className={Styles.thum}
                  alt="花束の画像"
                />
              </Tab>
              <Tab>
                <StaticImage
                  src="../images/disc/03.jpg"
                  className={Styles.thum}
                  alt="ハートの画像"
                />
              </Tab>
            </Tab.List>

            <Tab.Panels
              className={Styles.detail}
            >
              <Tab.Panel className={Styles.discItem}>
                <p className={Styles.discDate}>2020.11.01 New Single</p>
                <p className={Styles.discTitle}>死ぬまで<span className={Styles.purple}>愛</span>して Type-A</p>
                <div className={Styles.discInner}>
                  <StaticImage
                    src="../images/disc/01.jpg"
                    alt="hoge"
                    className={Styles.discImgWrapper}
                  />
                  <ol className={Styles.musicList}>
                    <li><p className={Styles.info}>PTNN38887-1022</p></li>
                    <li><p className={Styles.info}>税込 : 1,895円</p></li>
                    <li>1. 死ぬまで愛して</li>
                    <li>2. ギャラクティカ銀河</li>
                    <li>3. アイスホッケーの恋</li>
                    <li>4. OL人生</li>
                  </ol>
                </div>
              </Tab.Panel>

              <Tab.Panel className={Styles.discItem}>
                <p className={Styles.discDate}>2020.11.01 New Single</p>
                <p className={Styles.discTitle}>死ぬまで<span className={Styles.purple}>愛</span>して Type-B</p>
                <div className={Styles.discInner}>
                  <StaticImage
                    src="../images/disc/02.jpg"
                    alt="花束の画像"
                    className={Styles.discImgWrapper}
                  />
                  <ol className={Styles.musicList}>
                    <li><p className={Styles.info}>PTNN38887-1023</p></li>
                    <li><p className={Styles.info}>税込 : 1,895円</p></li>
                    <li>1. 死ぬまで愛して</li>
                    <li>2. ロマンス浮船</li>
                    <li>3. ケチャップ濃い目</li>
                    <li>4. ピンクの画鋲を踏んだなら</li>
                  </ol>
                </div>
              </Tab.Panel>

              <Tab.Panel className={Styles.discItem}>
                <p className={Styles.discDate}>2020.11.01 New Single</p>
                <p className={Styles.discTitle}>死ぬまで<span className={Styles.purple}>愛</span>して Type-C</p>
                <div className={Styles.discInner}>
                  <StaticImage
                    src="../images/disc/03.jpg"
                    alt="花束の画像"
                    className={Styles.discImgWrapper}
                  />
                  <ol className={Styles.musicList}>
                    <li><p className={Styles.info}>PTNN38887-1024</p></li>
                    <li><p className={Styles.info}>税込 : 1,895円</p></li>
                    <li>1. 死ぬまで愛して</li>
                    <li>2. 私の父は結界師</li>
                    <li>3. 張り紙禁止令</li>
                    <li>4. </li>
                  </ol>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </section>

      <section className={`${Styles.section} ${Styles.contentsSection}`} id="contents">
        <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Contents</h2>
        <a
          className={Styles.contents}
          href="https://blog.toriwatari.work/series/GitAdvance/page/1/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/news/news1.jpg"
            alt="hoge"
          />
          <div className={Styles.contentsInner}>
            <div className={Styles.contentsTitleWrapper}>
              <p className={Styles.contentsTitle}>Git中級者を目指す</p>
              <time>2020.12.03</time>
            </div>
            <div className={Styles.contentsText}>
              <p>Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。</p>
              <p>例えば、「git rebaseを使いこなせるようになる」、「git logの出力結果を自分好みにカスタマイズする」、「.gitフォルダの中身を知る」といった題材を用意しています。</p>
            </div>
          </div>
        </a>

        <div className={Styles.contentsContainer}>
          <a
            className={Styles.contents}
            href="https://blog.toriwatari.work/series/HelloWeb/page/1/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/news/news2.jpg"
              alt="Hoge"
              className={Styles.imgWrapper}
            />
            <div className={Styles.contentsWrapper}>
              <div className={Styles.contentsTitleWrapper}>
                <p className={Styles.contentsTitle}>初めてのHTML & CSS</p>
                <time>2019.1.26</time>
              </div>
              <p className={Styles.contentsText}>HTMLとCSSはIT技術の入門に最適だと考えています。これらの言語を用い簡単なWebページを作成し、Webページの仕組みを学びます。</p>
            </div>
          </a>

          <a
            className={Styles.contents}
            href="#"
            target="_blank"
          >
            <StaticImage
              src="../images/news/news3.jpg"
              alt="#"
              className={Styles.imgWrapper}
            />
            <div className={Styles.contentsWrapper}>
              <div className={Styles.contentsTitleWrapper}>
                <p className={Styles.contentsTitle}>Flexboxをマスターする</p>
                <time>2019.1.26</time>
              </div>
              <p className={Styles.contentsText}>理想の毛虫は視聴率を見るのであったが、木の葉が乾いた眠ることがある。歯磨きが縄で吊り下げられた蝶の進化した姿であるのだった。</p>
            </div>
          </a>
        </div>

        <div className={`${Styles.contentsContainer} ${Styles.container_2}`}>
          <a className={Styles.contents} href="#">
            <StaticImage
              src="../images/news/news4.jpg"
              alt="#"
              className={Styles.imgWrapper}
            />
            <div className={Styles.contentsWrapper}>
              <div className={Styles.contentsTitleWrapper}>
                <p className={Styles.contentsTitle}>柱時計と互換性のある電子</p>
                <time>2019.1.26</time>
              </div>
              <p className={Styles.contentsText}>実は、女はクォークの兄弟である雪だるまの秘密を知る予定である。</p>
            </div>
          </a>

          <a className={Styles.contents} href="#">
            <StaticImage
              src="../images/news/news5.jpg"
              alt="#"
              className={Styles.imgWrapper}
            />
            <div className={Styles.contentsWrapper}>
              <div className={Styles.contentsTitleWrapper}>
                <p className={Styles.contentsTitle}>伊勢海老とは似ても似つかない月</p>
                <time>2019.1.26</time>
              </div>
              <p className={Styles.contentsText}>実は、女はクォークの兄弟である雪だるまの秘密を知る予定である。</p>
            </div>
          </a>
        </div>
      </section>

      <section className={`${Styles.section} ${Styles.memberSection}`} id="member">
        <h2 className={`${Styles.title} ${Styles.sectionTitle} ${Styles.memberSectionTitle}`}>Member</h2>


        <div className={Styles.memberWrapper}>
          <Member />

          <a>
            <StaticImage
              src="../images/member/member2.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>nanami</p>
            </div>
          </a>
          <a>
            <StaticImage
              src="../images/member/member3.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>mai</p>
            </div>
          </a>

          <a>
            <StaticImage
              src="../images/member/member4.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>sayuri</p>
            </div>
          </a>

          <a>
            <StaticImage
              src="../images/member/member5.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>rina</p>
            </div>
          </a>

          <a>
            <StaticImage
              src="../images/member/member6.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>mai</p>
            </div>
          </a>

          <a>
            <StaticImage
              src="../images/member/member7.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>erika</p>
            </div>
          </a>

          <a>
            <StaticImage
              src="../images/member/member8.jpg"
              alt="oge"
              layout="fullWidth"
            />
            <div>
              <p>manatsu</p>
            </div>
          </a>
        </div>
      </section>
    </main>

    <footer className={Styles.footer}>
      <div className={Styles.footerNogi}></div>
      <h2 className={`${Styles.footerTitle} ${Styles.title}`}>Potsunen 47 Official Web Site</h2>

      <p className={Styles.copyright}>Copyright © 2020 <Link to="/">toriwatari</Link></p>
    </footer>
  </>
)

export default Sample2
