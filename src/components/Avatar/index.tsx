import avatar from "../../assets/avatar.png"

export function Avatar({width = "65px", height="65px"}) {
  return (
    <img src={avatar} width={width} height={height} alt="Avatar"/>
  )
}