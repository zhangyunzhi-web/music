import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store/hooks'
import BannerWrapper from './style'
interface IProps {
  children?: ReactNode
}
const Banner: FC<IProps> = memo(() => {
  /**从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <BannerWrapper>
      <ul>
        {banners.map((item) => {
          return (
            <li key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </li>
          )
        })}
      </ul>
    </BannerWrapper>
  )
})

export default Banner
