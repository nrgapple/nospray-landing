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

    <button className="silence" title="Silence Switch"></button>
    <button className="volume-up" title="Volume Up"></button>
    <button className="volume-down" title="Volume Down"></button>
    <button className="sleep" title="Sleep"></button>
  </div>
)

export default Phone
