import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  const [isVisible,setVisible] = React.useState(false);
  return (
    <Routes>
      <Route element={<Layout visibility={isVisible}  />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About handler={setVisible} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = ({visibility}) => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    pointerEvents: !visibility ? 'auto': 'none',
    cursor:  !visibility ? 'pointer':'default'
  });
  // const dis = () => {
  //   if(visibility){
  //     return {
  //       pointerEvents: 'none',
  //       cursor: 'default'
  //     }
  //   }else {
  //     return ""
  //   }
  // }
  console.log("visibility",visibility)

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style} >
          Home
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <NavLink to="/contact" style={style} >
          Contact
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;