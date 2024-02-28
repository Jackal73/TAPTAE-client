import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Resources from "./pages/resources/Resources";
import Members from "./pages/members/Members";
import PtaMacs from "./pages/ptamacs/PtaMacs";
import UpcomingCCUs from "./pages/upcomingCCUs/UpcomingCCUs";
import PtaMacsForm from "./components/ptaMacsForm/PtaMacsForm";
import ContactUs from "./pages/contactUs/ContactUs";
import "./App.css";
import Instructions from "./pages/instructions/Instructions";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/home">
          <Home />
        </Route> */}

      <Route exact path="/about">
        <AboutUs />
      </Route>

      <Route exact path="/members">
        <Members />
      </Route>
      <Route exact path="/ptamacsform">
        <PtaMacsForm />
      </Route>
      <Route exact path="/instructions">
        <Instructions />
      </Route>
      <Route exact path="/ptamacs">
        <PtaMacs />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
      <Route exact path="/upcoming-ccus">
        <UpcomingCCUs />
      </Route>
      <Route exact path="/contact-us">
        <ContactUs />
      </Route>
      {/* </Switch> */}
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     // <div className="">
//     <BrowserRouter>
//       <Switch>
//         {/* <Route exact path="/login" element={<Entry />} /> */}
//         {/* <Route exact path="/registration" element={<Registration />} />/ */}

//         {/* <Route exact path="/adminDashboard" element={<AdminDashboard />} /> */}
//         {/* <Route exact path="/home" element={<PrivateRoute />}> */}
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/about">
//           <AboutUs />
//         </Route>
//         <Route exact path="/members" element={<Members />}></Route>
//         {/* <Route exact path="/ptamacs-form" element={<NewOrder />} /> */}
//         <Route exact path="/ptamacs" element={<PtaMacs />}></Route>
//         <Route exact path="/contact-us" element={<ContactUs />}></Route>

//         {/* </Route> */}
//       </Switch>
//     </BrowserRouter>
//     // </div>
//   );
// }

export default App;
