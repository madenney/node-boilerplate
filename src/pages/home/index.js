import Layout from "../../components/Layout";
import styles from './Home.module.scss'
import { Carousel }  from 'react-bootstrap';


const Home = (props) => (
  <Layout>
    <div className={styles.carouselContainer}>
      <Carousel
        prevIcon={<img className={styles.arrow} src ="/back.png"/>}
        nextIcon={<img className={styles.arrow} src ="/forward.png"/>}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/recent/cnc.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={styles.title}>Custom Manufacturing</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/irl_pics/cnc_plastic.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className={styles.title}>Instant Quotes</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/recent/big_d_resize.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className={styles.title}>Limitless Possibilities</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </Layout>
)

export default Home;