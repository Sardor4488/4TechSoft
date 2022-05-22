 
import Footer from './4TechSoft/components/footer';
import Header from './4TechSoft/components/header';
import AppCss from './appWrapper';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './4TechSoft/pages/mainPage';
import CoursesOffline from './4TechSoft/pages/coursesOffline';
import CoursessOnline from './4TechSoft/pages/coursessOnline/CoursessOnline';
import About from './4TechSoft/pages/about/about';
import ToOrder from './4TechSoft/pages/toOrder';
function App() {
  return (
  <AppCss>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <MainPage/>} /> 
        <Route path="/coursesOffline" element={ <CoursesOffline/>} /> 
        <Route path="/coursesOnline" element={ <CoursessOnline/>} /> 
        <Route path="/about" element={ <About/>} /> 
        <Route path="/toOrder" element={ <ToOrder/>} /> 
      </Routes>
      <Footer/>
   </div>
  </AppCss>
  );
}

export default App;
