import { IconButton } from '@mui/material'
import React from 'react'
import Letter from './Letter'
import styles from './Word.module.css'
import PlayIcon from '@mui/icons-material/PlayArrow'

function Word(props) {
	const {
		word: { text, translation }
	} = props
	const letters = text.split('').map(text => ({ text, transcription: '8' }))
	return (
		<div className={styles.word}>
			<div className={styles.letters}>
				{letters.map((letter, index) => (
					<Letter letter={letter} key={`letter-${index}`} />
				))}
			</div>
			<div className={styles.wordBottom}>
				<div className={styles.wordTranslation}>{translation}</div>
				<div className={styles.playIcon}>
					<IconButton size='small'>
						<PlayIcon fontSize='small' />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Word
