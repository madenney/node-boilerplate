import Layout from "../../components/Layout";
import styles from "./DtPart.module.scss";

const DtPart = (props) => {
  
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>Drawing to Part</div>
        <div className={styles.uploadMessage}>Feature coming soon...</div>

        {/*
        <div className={styles.uploadBox}>
          <div className={styles.uploadMessage}>Upload Files</div>
          <div>(this doesn't actually do anything yet)</div>
        </div> */}
      </div>
    </Layout>
  )
}

export default DtPart;