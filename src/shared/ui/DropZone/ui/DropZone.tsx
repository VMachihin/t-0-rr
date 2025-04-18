import { FC } from 'react'
import { useDropzone } from 'react-dropzone'
import { IDropZoneProps } from '../types'

import { Icon } from '@/shared/ui/Icon'
import { Button } from '@/shared/ui/Button'

import styles from './dropZone.module.scss'

export const DropZone: FC<IDropZoneProps> = ({ files, onDrop, onRemoveFile }) => {
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
	})

	return (
		<>
			{/* Файл не загружен */}
			{!files?.length ? (
				<section className={styles.container}>
					<div {...getRootProps({ className: 'dropzone' })}>
						<input {...getInputProps()} />
						<p className={styles.dropzone__label}>
							<span>Выберите файл</span> или перетащите файл сюда
						</p>
					</div>
				</section>
			) : (
				<>
					{/* Файл загружен */}
					{files.map((file, index) => (
						<div className={styles['uploadFile-wrapper']} key={file.id}>
							<Icon iconId='file' className={styles['uploadFile-icon']} />
							<div className={styles.uploadFile}>
								{file.file.name}{' '}
								<span className={styles.sizeFile}>{Math.round(file.file.size / 1024)} Б</span>
							</div>

							<Button
								mode='clear'
								icon={<Icon iconId='input-reset' />}
								className={styles.deleteFile}
								onClick={() => onRemoveFile(index)}
							/>
						</div>
					))}
				</>
			)}
		</>
	)
}
