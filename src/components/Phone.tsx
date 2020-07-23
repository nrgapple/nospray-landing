import React, { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const Phone = ({ children }: Props) => (
  <div className="iphone">
    <div className="screen">{children}</div>
    <button className="home" title="Home"></button>
    <span className="speaker" title="Speaker"></span>
    <span className="camera" title="Camera"></span>
    <span className="proximity" title="Proximity Sensor"></span>
  </div>
)

export default Phone
