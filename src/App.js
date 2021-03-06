import './App.css';
import ColoredUserpic from "./ColoredUserpic/ColoredUserpic"
import avatar from './avatar.jpg'

function App() {
  return (
    <div className="App">
      <ColoredUserpic
        src={avatar}
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />

    </div>
  );
}

export default App
