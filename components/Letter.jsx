import { ButtonBase, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './Word.module.css'

function Letter(props) {
	const { letter } = props
	const { text, transcription } = letter
	return (
		<div className={styles.letter}>
			<IconButton sx={{ height: '2rem', width: '2rem', color: 'black' }}>
				<div className={styles.letterText}>{text}</div>
			</IconButton>
			<div className={styles.letterTranscription}>{transcription}</div>
		</div>
	)
}

export default Letter
