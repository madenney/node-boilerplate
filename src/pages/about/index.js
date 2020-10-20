import Layout from "../../components/Layout";
import styles from "./About.module.scss";


const About = (props) => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.title}>About Our Company</div>
      <div className={styles.divider}></div>
      <div className={styles.left}>
        <div className={styles.subTitle}>Our Mission</div>
        <div className={styles.text}>To make advanced CNC features available to average consumers.</div>
        <div className={styles.subTitle}>History</div>
        <div className={styles.text}>Founded in 2020 in California USA, we are an exciting startup company.</div>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          <li>
            <div className={styles.checkbox}></div>
            <div className={styles.listItem}>Instant Quotes</div>
          </li>
          <li>
            <div className={styles.checkbox}></div>
            <div className={styles.listItem}>Highly Customizable</div>
          </li>
          <li>
            <div className={styles.checkbox}></div>
            <div className={styles.listItem}>Quality Engineering</div>
          </li>
        </ul>
        <img className={styles.image} src="/irl_pics/cnc_wood.jpg"></img>
      </div>
    </div>
  </Layout>
)

export default About;