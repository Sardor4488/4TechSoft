import React, {   useState } from "react";
import { Button, Menu } from '@mui/material' 
import { Link, NavLink } from 'react-router-dom'
import HeaderCss from './headerCss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = () => {
  
const [isopen, setIsopen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<HeaderCss>
        <div className='header'>
          <div className='d-flex w-100  px-5 py-3 d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
              <Link className="d-flex align-items-center" to="/">  <h3 className='  text-dark d-flex align-items-center logo px-0'><span className='text-success'> 4Tech</span> Soft</h3> </Link>
              <Box className= "nav__menu lg_none ps-5"       >
                <Tabs value={value} onChange={handleChange} className="d-flex align-items-center px-0" aria-label="nav tabs example">
                  <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0 " label= {<NavLink to='/' className="py-3 px-1 text-success">Bosh sahifa</NavLink>}  />
                  <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0 " label= {<NavLink to='/toOrder' className="text-success py-3 px-2">Buyurtma berish</NavLink>}  />
                  <LinkTab
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      className="fw-bold p-0 text-success"
                      label="Kurslar"/>
                  <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0 " label= {<NavLink   to='/about' className="py-3 px-2 text-success">Biz haqimizda</NavLink>}  />
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{'aria-labelledby': 'basic-button',}}
                      className="d-flex align-items-center justify-content-center flex-column">
                    <p className='px-3 mb-1'><Link to="/coursesOnline" className='fw-bold w-100 text-success' onClick={handleClose}>Onlayn kurslar</Link></p>
                    <p className='px-3 mb-1 text-success'><Link to="/coursesOffline" className='fw-bold w-100 text-success' onClick={handleClose}>Oflayn kurslar</Link></p>
                  </Menu>
                </Tabs>
              </Box>
            </div>
            <div className='lg_none'>
              <Link to="#">  <Button variant="outlined" className='me-2 btn-header' color="success"> Kirish  </Button></Link>
              <Link to="#"> <Button variant="contained"  className="btn-header" color="success"> Ro'yhatdan o'tish  </Button></Link>
            </div>
            <FontAwesomeIcon className='faBars' onClick={()=> setIsopen(!isopen)} icon={faBars} />
          </div>
          <div className={`shadow-header ${isopen && "d-show-nav " }`} onClick={()=> setIsopen(!isopen)}></div>
          <div className={`md-nav ${isopen && "d-show-nav " }`}>
            <div className='w-100 h-100'> 
              <div className='d-flex justify-content-between w-100 py-3 px-3 align-items-center'> 
                <h3 className='me-5 text-dark d-flex align-items-center logo '><span className='text-success'> 4Tech</span> Soft</h3>
                <FontAwesomeIcon icon={faXmark} className="faXmark h3 mb-0" onClick={()=> setIsopen(!isopen)} />
              </div>
              <div className='d-flex justify-content-center flex-wrap align-items-center mt-3'>
                <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0 " label= {<NavLink to='/' className="p-3 text-success">Bosh sahifa</NavLink>}  />
                    <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0 " label= {<NavLink to='/toOrder' className="text-success p-3">Buyurtma berish</NavLink>}  />
                    <LinkTab
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="fw-bold p-0 w-75 m-auto text-success"
                        label="Kurslar"/>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button',}}
                        className="d-flex align-items-center justify-content-center flex-column">
                        <p className='px-3 mb-1'><Link to="/coursesOnline" className='fw-bold w-100 text-success' onClick={handleClose}>Onlayn kurslar</Link></p>
                        <p className='px-3 mb-1'><Link to="/coursesOffline" className='fw-bold w-100 text-success' onClick={handleClose}>Oflayn kurslar</Link></p>
                    </Menu>
                    <LinkTab className="fw-bold pb-0 ps-0 pe-0 pt-0  w-75 m-auto" label= {<NavLink   to='/about' className="p-3 text-success">Biz haqimizda</NavLink>}  />
                    <Link to="#">  <Button variant="outlined" className='me-2 mb-3' color="success"> Kirish  </Button></Link>
                    <Link to="#"> <Button variant="contained" color="success"> Ro'yhatdan o'tish  </Button></Link>
              </div>
            </div>
          </div>
        </div>
</HeaderCss>
  )
}

export default Header;