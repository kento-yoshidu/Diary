import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Slider from "react-slick"

import * as Styles from "../styles/slick.module.scss"

const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} ${Styles.nextButton}`}
    style={{
      display: "block"
    }}
    onClick={onClick}
  />

)

const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} ${Styles.prevButton}`}
    style={{
      display: "block"
    }}
    onClick={onClick}
  />
)

const SlickConfig = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

const ReactSlick = () => (
  <div className={Styles.wrapper}>
    <Slider {...SlickConfig}>
      <div className={Styles.slide}>
        <StaticImage
          src="../images/live_photograph/live1.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>

      <div className={Styles.slide}>
        <StaticImage
          src="../images/live_photograph/live2.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>

      <div className={Styles.slide}>
        <StaticImage
          src="../images/live_photograph/live3.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </Slider>
  </div>
)

export default ReactSlick
