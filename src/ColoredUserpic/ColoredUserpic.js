import React, {useState} from 'react'

function ColoredUserpic(props) {
  const [hover, setHover] = useState(false);
  const { src, size, margin, backgroundColor, colors, hoverColors, colorWidth } = props

  const mouseEnter = () => setHover(true)
  const mouseLeave = () => setHover(false)
  return (
    <>
      <div
        onMouseLeave={mouseLeave}
        onMouseEnter={mouseEnter}
        style={{
          height: size,
          width: size,
          background: hover
            ? `linear-gradient(to left, ${[...colors]})`
            : `linear-gradient(to left, ${[...hoverColors]})`,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
          width: size - margin + 'px',
          height: size - margin + 'px',
          backgroundColor,
          borderRadius: '50%',
          overflow: "hidden",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img style={{
            width: size - colorWidth + 'px',
            height: size - colorWidth + 'px',
            borderRadius: '50%',
            objectFit: "cover"
          }} src={src} alt="Avatar"/>
        </div>
      </div>
    </>
  );
}

export default ColoredUserpic
