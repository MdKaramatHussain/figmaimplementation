
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './navbar/Header';
import NavHome from './home/Home';
import Services from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#08090C' }}>
      <div style={{borderBottom:'5px solid #7929FF'}}>
        <Header />
        <NavHome />
      </div>
      <Services />
      <About />
      <Contact />
    </div>
  )
}
