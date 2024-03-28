// style
import styles from "./address.module.css";
// component
function Address() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.title}>
          <h3>My Addresses</h3>
        </div>
        <h2 className={styles.sec_title}>Select Address</h2>
        <form action="">
          <div className={styles.place}>

            <div>
              <input id="home" type="radio" name="address" />
              <label htmlFor="home">Home</label>
            </div>
            <div>
              <input id="work" type="radio" name="address" />
              <label htmlFor="work">Work</label>
            </div>
            <div>
              <input id="other" type="radio" name="address" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.first_inputs}>
              <div>
                <div>
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Country</label>
                  <input type="text" />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">City</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={styles.last_input}>
              <label htmlFor="">Street addresss</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.btn}>Save</div>
        </form>
      </main>


    </>
  );
}

export default Address;
