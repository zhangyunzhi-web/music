import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Download: FC<IProps> = memo(() => {
  return <div>Download</div>
})

export default Download
