import Layout from "../../components/Layout";

import styles from "./Gallery.module.scss";
import gallery from "../../../constants/gallery.json";
import { Carousel }  from 'react-bootstrap';
import Link from "next/link";


const Gallery = (props) => (
  <Layout>
    <div className={styles.container}>
      {gallery.map( product => {
        if(product.carousel){
          return (
            <div key={product.id} className={styles.card}>
              <Carousel
                interval={null}
              >
                {product.img.map((image,index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className={styles.image}
                        src={image}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
              <Link href={`/product/${product.product}`}><div className={styles.name}>{product.name}</div></Link>
            </div>
          )
        } else {
          return (
            <div key={product.id} className={styles.card}>
              <img className={styles.image} src={product.img}/>
              <Link href={`/product/${product.product}`}><div className={styles.name}>{product.name}</div></Link>
            </div>
          )
        }
      })}
    </div>
  </Layout>
)

export default Gallery;