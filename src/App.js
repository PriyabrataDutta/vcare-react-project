import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {BrowserRouter, Router, Routes,Route} from "react-router-dom"
import About from './component/About';
import Healthpackagepage from './component/Health-package';
import GalleryPage from './component/Gallerypage';
import Contact from './component/Contact-us';
import Ultrasound from './component/Ultrasound-Scan';
import TwodEcho from './component/twod-Echo/Twod-Echo';
import Threefour from './component/td-fd-scan/td-fd-scan';
import DigitalXray from './component/digital-x-ray/DigitalXray';
import ECG from './component/ecg/ecg';
import ClinicalLaboratory from './component/clinical-Laboratory/Clinical-Laboratory';
import Endoscopy from './component/endoscopy/Endoscopy';
import Colonoscopy from './component/colonoscopy/Colonoscopy';
import Obstetrics from './component/Obstetrics/Obstetrics';
import Gynaecology from './component/Gynaecology/Gynaecology';
import Fetal from './component/Fetal/Fetal';
import Ourdocter from './component/Our-doctor/Ourdoctor';
import Consultant from './component/Consultant/Consultant';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/about' element={<About/>}/> 
       <Route path='/healthpack' element={<Healthpackagepage/>}/> 
       <Route path='/gallery' element={<GalleryPage/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/ultrasound' element={<Ultrasound/>}/>
       <Route path='/twodecho' element={<TwodEcho/>}/>
       <Route path='/threefour' element={<Threefour/>}/>
       <Route path='/digitalxay' element={<DigitalXray/>}/>
       <Route path='/ecg' element={<ECG/>}/>
       <Route path='/cliniclab' element={<ClinicalLaboratory/>}/>
       <Route path='/endoscopy' element={<Endoscopy/>}/>
       <Route path='/colonoscopy' element={<Colonoscopy/>}/>
       <Route path='/obstetrics' element={<Obstetrics/>}/>
       <Route path='/gynaecology' element={<Gynaecology/>}/>
       <Route path='/fetal' element={<Fetal/>}/>
       <Route path='/ourdoctor' element={<Ourdocter/>}/>
       <Route path='/consultant' element={<Consultant/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
