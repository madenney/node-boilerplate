import Layout from "../../components/Layout";
import styles from "./CustomWork.module.scss";


const CustomWork = (props) => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.title}>Request Custom Work</div>
      <div className={styles.inputRow}>
        <div className={styles.inputLabel}>Email</div>
        <input className={styles.emailInput}></input>
      </div>
      <div className={styles.inputRow}>
        <div className={styles.inputLabel}>Info</div>
        <textarea className={styles.infoInput} rows="10"></textarea>
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
  </Layout>
)

export default CustomWork;