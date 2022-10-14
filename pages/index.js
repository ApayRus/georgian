import React from 'react'
import Phrase from '../components/Phrase'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.phrases}>
			<Phrase
				phrase={{
					text: 'hohohoh ahahaha xxxxx cccccc',
					translation: 'this is translation of phrase'
				}}
			/>
		</div>
	)
}
