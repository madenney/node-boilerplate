import React, { Component } from "react";
import Layout from '../../components/Layout'
import styles from "./Product.module.scss";
import materials from "../../../constants/materials.json"

import { getAllProductIds, getProductData } from '../../lib/products'

class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            product: props.product,
            cost: 0
        }
        props.product.options.forEach(option => {
            if(option.id === "engraving" | option.id === "baseMaterial") return;
            if(option.id === "material"){
                return this.state[option.id] = props.product.defaultMaterial;
            } else {
                return this.state[option.id] = option.min; 
            }
        })
    }

    calculateCost(){
        const { product } = this.state;
        const numbers = product.options.map(option => {
            if(option.id === "engraving" || option.id === "baseMaterial") return 1;
            if(option.id === "material"){
                return materials.find(m => m.id === this.state[option.id]).cost_sqft;
            }

            return this.state[option.id];
        })
        let ret = 1;
        numbers.forEach(num => {
            ret = ret * num;
        })

        if(isNaN(ret)){
            return "Invalid Input"
        }
        return `$${ret.toFixed(2)}`;
    }

    renderOptions(){
        const { product, material } = this.state;
        return product.options.map((option,index) => {

            switch( option.tag ){
                case "L":
                case "W":
                case "H":
                case "T":
                case "C":
                    return (
                        <div key={index} className={styles.optionRow}>
                            <div className={styles.label}>{option.name}</div>
                            <input 
                                onChange={(e) => this.setState({[option.id]: e.target.value})} 
                                value={this.state[option.id]} 
                                className={styles.input}
                            ></input>
                        </div>
                    )
                case "M":
                    return (
                        <div  key={index} className={styles.optionRow}>
                            <div className={styles.label}>{option.name}</div>
                            <select value={material} className={styles.select}
                                onChange={e => this.setState({material: e.target.value})}
                            >
                                {materials.map(m => {
                                    return <option key={m.id} value={m.id}>{m.name}</option>
                                })}
                            </select>
                        </div>
                    )
                default:                
                    return ""
    
            }
            return (
                <div>{option.name}</div>
            )
        }) 
    }

    render(){
        const { product } = this.state;
        const cost = this.calculateCost();

        return (
            <Layout>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.topLeft}>
                            <div className={styles.info}>
                                <img className={styles.image} src={product.img}></img>
                                <div className={styles.name}>{product.name}</div>
                            </div>
                        </div>
                        <div className={styles.topRight}>
                            {this.renderOptions(product.options)}
                        </div>
                    </div>
                    <div>
                        <div className={styles.cost}>
                            <div className={styles.label}>Cost:</div>
                            <div className={styles.value}>{cost}</div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
  
}

export async function getStaticPaths() {
  const paths = getAllProductIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = getProductData(params.id)
  return {
    props: {
        product
    }
  }
}

export default Product;