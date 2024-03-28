// components
// style
import styles from "./profile.module.css";

function Profile() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.title}>
          <h3>My Profile</h3>
        </div>
        <form action="">
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="">First name</label>
              <input type="text" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Last name</label>
              <input type="text" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Country code</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label htmlFor="">Phone</label>
              <input type="number" />
            </div>

            <div className={styles.input}>
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>

            <div className={styles.last}>
              <div className={styles.input}>
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.btn}>Save</div>
        </form>
      </main>
      <div>
      </div>
    </>
  );
}

export default Profile;
