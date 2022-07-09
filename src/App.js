import { useEffect, useState } from 'react';
import 'swiper/css/bundle';
import Moon from './assets/moon.png';
import Stars from './assets/stars.png';
import Layout from './components/Layout';

function App() {
  const [clientXMouse, setClientXMouse] = useState(0);
  const [clientYMouse, setClientYMouse] = useState(0);

  function parallax(e) {
    const moving_value = 5;
    setClientXMouse((e.clientX * moving_value) / 250);
    setClientYMouse((e.clientY * moving_value) / 250);
  }

  useEffect(() => {
    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  return (
    <div className='App'>
      <section id='background'>
        <img
          src={Stars}
          id='stars'
          style={{
            transform: `translateX(${clientXMouse}px) translateY(${clientYMouse}px)`,
          }}
        />
        <img src={Moon} id='moon' />
      </section>
      <Layout />
    </div>
  );
}

export default App;
