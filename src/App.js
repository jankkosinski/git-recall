import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavToggleButton from './components/NavToggleButton';
import AnimationsProvider from './context/providers/AnimationsProvider';
import CityLightBoxProvider from './context/providers/CityLightBoxProvider';
import DestinationsProvider from './context/providers/DestinationsProvider';
import NavProvider from './context/providers/NavProvider';
import PolicyProvicer from './context/providers/PolicyProvicer';
import ReviewsProvider from './context/providers/ReviewsProvider';
import SignModalProvider from './context/providers/SignModalProvider';
import Navigation from './layout/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SignModalProvider>
        <NavProvider>
          <PolicyProvicer>
            <DestinationsProvider>
              <CityLightBoxProvider>
                <ReviewsProvider>
                  <AnimationsProvider>
                    <NavToggleButton></NavToggleButton>
                    <Navigation></Navigation>
                    <HelmetProvider>
                      <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/about' element={<About></About>}></Route>
                        <Route
                          path='/contact'
                          element={<Contact></Contact>}
                        ></Route>
                        <Route
                          path='/details/:id'
                          element={<Details></Details>}
                        ></Route>
                        <Route path='*' element={<NotFound></NotFound>}></Route>
                      </Routes>
                    </HelmetProvider>
                  </AnimationsProvider>
                </ReviewsProvider>
              </CityLightBoxProvider>
            </DestinationsProvider>
          </PolicyProvicer>
        </NavProvider>
      </SignModalProvider>
    </Router>
  );
}

export default App;
