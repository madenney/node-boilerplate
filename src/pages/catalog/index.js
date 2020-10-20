import Layout from "../../components/Layout";
import React from "react"
import styles from "./Catalog.module.scss";
import products from "../../../constants/products.json";
import Link from "next/link";
import fetch from "isomorphic-fetch";


class Catalog extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    console.log("COMP DID MOUNT")
  }

  render(){
    return (
      <Layout>
        <div className={styles.container}>
          {products.map( product => {
            if(product.noDisplay) return false
            return (
              <Link href={`/product/${product.id}`} key={product.id}><div key={product.id} className={styles.card}>
                <img className={styles.image} src={product.img}/>
                <div className={styles.name}>{product.name}</div>
              </div></Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

// const Catalog = (props) => (
//   <Layout>
//     <div className={styles.container}>
//       {products.map( product => {
//         if(product.noDisplay) return false
//         return (
//           <Link href={`/product/${product.id}`} key={product.id}><div key={product.id} className={styles.card}>
//             <img className={styles.image} src={product.img}/>
//             <div className={styles.name}>{product.name}</div>
//           </div></Link>
//         )
//       })}
//     </div>
//   </Layout>
// )

export default Catalog;