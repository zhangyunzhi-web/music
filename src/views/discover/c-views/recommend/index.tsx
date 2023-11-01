import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import zRequest from '@/services'
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

const Recommand: FC<IProps> = memo(() => {
  const [banners, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    zRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log('🚀 ~ file: index.tsx:16 ~ .then ~ res:', res)
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      <ul>
        {banners.map((item) => {
          return (
            <li key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default Recommand
