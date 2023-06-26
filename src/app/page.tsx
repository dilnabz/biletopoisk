'use client'

import styles from './page.module.css'
import TicketSection from './components/TicketSection/TicketSection'
import FilterSection from './components/FilterSection/FilterSection'



export default function Home({}) {
  return (  
	<div className={styles.mainPage}>
			<FilterSection />
			<TicketSection />	
    </div>
  )
}
