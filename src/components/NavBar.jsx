import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/logo.png'
import css from './NavBar.module.css'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store';
function NavBar() {
  const changeL = useLanguageStore((state) => state.changeL)
  const [leng,setleng] = useState(useLanguageStore((state) => state.language))
  useEffect(() => {
    localStorage.setItem("L",leng)
  },[leng])
  return (
    <Navbar bg="light" expand="lg" className="shadow-lg" sticky="top">
      <Container fluid >
        <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width:'6rem'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sec1">{leng=="TH" ? <>ประวัติบริษัท</>:<>ประวัติบริษัท</>}</Nav.Link>
            <Nav.Link href="#sec2">{leng=="TH" ? <>ท่อทองแดง (Copper pipe)</>:<>铜管</>}</Nav.Link>
            <Nav.Link href="#sec3">{leng=="TH" ? <>ใบพัดลม (fan)</>:<>风扇</>}</Nav.Link>
            <Nav.Link href="#sec4">{leng=="TH" ? <>ท่อลมแอร์</>:<>风管</>}</Nav.Link>
            <Nav.Link href="#sec5">{leng=="TH" ? <>แผง PCBA (PCBA Board)</> : <>五、PCBA</>}</Nav.Link>
            <Nav.Link href="#sec6">{leng == "TH" ? <>โฟม (foam)</>:<>六、泡沫</>}</Nav.Link>
            <Nav.Link href="#sec7">{leng == "TH" ? <>กล่องกระดาษ (carton box)</>:<>七、纸箱</>}</Nav.Link>
            <Nav.Link href="#sec8">{leng == "TH" ? <>Gusset</> :<>角撑</>}</Nav.Link>
            {/* <Nav.Link href="#sec9">Evaporator and Condenser </Nav.Link> */}

          </Nav>
          <Nav>
            <div className={`${css.boxL}`} onClick={() => {
              leng=='TH'?setleng("CHN"):setleng("TH")
              changeL()
            }}>
              {leng=="TH"?<Nav.Link as={Link} to="/china">{leng=="TH"?(<>CHN</>):(<>TH</>)}</Nav.Link>:<Nav.Link as={Link} to="/">{leng=="TH"?(<>CHN</>):(<>TH</>)}</Nav.Link>}
                       
             

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;