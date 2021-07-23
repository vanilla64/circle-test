import React, {useState} from 'react'
// import './ColoredUserpic.css'

function ColoredUserpic(props) {
  const [hover, setHover] = useState(false);
  const { src, size, margin, backgroundColor, colors, hoverColors, colorWidth } = props

  const mouseEnter = () => setHover(true)
  const mouseLeave = () => setHover(false)
  return (
    <div
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter} style={{
      width: size,
      height: size,
      backgroundColor,
      borderRadius: '50%',
      overflow: "hidden",
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      margin: margin,
      border: !hover ? `
      ${colorWidth + 'px'} solid ${colors[0]}` : `${colorWidth + 'px'} solid ${hoverColors[0]}`,
      transition: '.3s'

    }}>
      {/*<img style={{*/}
      {/*  // width: size,*/}
      {/*  // height: size,*/}
      {/*  width: '100%',*/}
      {/*  height: '100%',*/}
      {/*  margin: 4 + 'px',*/}
      {/*  borderRadius: '4px solid red'*/}

      {/*}} src={src} alt="Avatar"/>*/}
    </div>
  );
}

export default ColoredUserpic
