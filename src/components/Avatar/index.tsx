import avatar from "../../assets/avatar.png"

export function Avatar({width = "65px", height="65px"}) {
  const scrollTo = () => {
    window.scrollTo(0, 0);
  }

  return (
    <img onClick={() => scrollTo()} src={avatar} width={width} height={height} style={{cursor: 'pointer'}} alt="Avatar"/>
  )
}