import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import {Input, Button} from 'antd'

function Footer() {
  return (
      <footer className={styles.footer}>
          <div className={`${styles.footer_col} `}>
              <div className={styles.footer_left}>
                  <div className={styles.footer_logo}>
                      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo"/>
                      <div>
                          <p>Double</p>
                          <p>bubble</p>
                      </div>
                  </div>
                  <span className={styles.copyright}>
                    © Double bubble, 2019, все права защищены
                </span>
              </div>
          </div>
          <div className={styles.footer_col}>
              <Link href="/online">Online</Link>
              <Link href="/stream">Live stream</Link>
              <Link href="/admin/events">Events</Link>
              <Link href="/restaurants">Restaurants</Link>
              <Link href="/clubs">Clubs</Link>
              <Link href="/places">Places</Link>
              <Link href="/villas">Villas</Link>
              <Link href="/rent-car">Rent transport</Link>
          </div>
          <div className={styles.footer_col}>
              <Link href="/plots-of-land">Plots of land</Link>
              <Link href="/housing">Housing</Link>
              <Link href="/lawyers">Lawyers</Link>
              <Link href="/magic-people">Magic people</Link>
              <Link href="/job">Job</Link>
              <Link href="/market-place">Market place</Link>

          </div>
          <div className={styles.footer_col}>
              <Link href="/support">Support</Link>
              <Link href="/vacancies">Vacancies</Link>
              <p className={styles.form_label}>Subscribe</p>
              <div className={styles.footer_form}>
                  <Input placeholder="Enter Your email" size="large" className={styles.antInputLg}/>
                  <Button type="primary" className='text-white p-2 text-sm' size="large">
                      Send
                  </Button>
              </div>
          </div>
      </footer>
  )
}

export default Footer
