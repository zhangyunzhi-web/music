import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { Button } from 'antd'
interface IProps {
  children?: ReactNode
}
const Header: FC<IProps> = memo(() => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            网易云音乐
          </a>
          <Link to="/discover">发现音乐</Link>
          <Link to="/mine">我的音乐</Link>
          <Link to="/focus">关注</Link>
          <Link to="/download">下载客户端</Link>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
        <Button type="primary">aaaa</Button>
      </div>
    </HeaderWrapper>
  )
})

export default Header
