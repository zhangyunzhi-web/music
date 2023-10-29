import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = memo(() => {
  return <div>Album</div>
})

export default Album
