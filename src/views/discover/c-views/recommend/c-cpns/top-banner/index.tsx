import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store/hooks'
import BannerWrapper from './style'
import { Carousel } from 'antd'
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
      <Carousel autoplay autoplaySpeed={1500}>
        {banners.map((item) => {
          return (
            <a href={item.url} key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </a>
          )
        })}
      </Carousel>
    </BannerWrapper>
  )
})

export default Banner
