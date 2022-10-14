import React from 'react'
import Word from './Word'
import styles from './Word.module.css'

function Phrase(props) {
	const { phrase } = props
	const { text, translation } = phrase
	const words = text.split(' ').map((text, index) => ({
		text,
		translation: `translation ${index + 1}`
	}))
	return (
		<div className={styles.phrase}>
			<div className={styles.words}>
				{words.map((word, index) => (
					<Word word={word} key={`word-${index}`} />
				))}
			</div>
			<div className={styles.translation}>{translation}</div>
		</div>
	)
}

export default Phrase
