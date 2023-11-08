import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRecommend } from './store'
import { useAppDispatch } from '@/store/hooks'
import Banner from './c-cpns/top-banner'
interface IProps {
  children?: ReactNode
}
export interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommend())
  }, [])
  return (
    <div>
      <Banner></Banner>
    </div>
  )
}

export default memo(Recommand)
