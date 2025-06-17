// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import LandingPresentation from "../Pages/LandingPresentation";
// import About from "../Pages/About";
// import Contributors from "../Pages/Contribution";
// import Login from "../Pages/Login";
// import ContactUs from "../Pages/Contactus";
// import Error from "../Pages/Error";
// import Registration from "../Pages/Registration";
// import ForgotPassword from "../Pages/ForgotPassword";
// import Branches from "../Pages/Branches";
// import SemesterOverview from "../Pages/Semester";
// import { cseSemesters } from "../Data/SemesterData";

// function Landing_pageRoutes() {
//   return (
//     <Routes>
//       <Route>
//         <Route path="/" element={<LandingPresentation />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/about/contactus" element={<ContactUs />} />

//         <Route path="/contributor" element={<Contributors />} />
//         <Route path="/admin" element={<Login />} />
//         <Route path="/admin/registration" element={<Registration />} />
//         <Route path="/admin/ForgotPassword" element={<ForgotPassword />} />
//         <Route path="/branch" element={<Branches />} />
//         <Route
//           path="/branch/cse"
//           element={
//             <SemesterOverview
//               branchName="Computer Science Engineering"
//               branchShortName="CSE"
//               branchDescription="Explore your academic journey through all eight semesters"
//               semesters={cseSemesters} // Your CSE semester data
//               onSemesterClick={(semester) => {
//                 // Handle semester click for CSE
//                 console.log("CSE Semester clicked:", semester);
//               }}
//             />
//           }
//         />
//         <Route path="*" element={<Error />} />
//       </Route>
//     </Routes>
//   );
// }

// export default Landing_pageRoutes;



import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPresentation from "../Pages/LandingPresentation";
import About from "../Pages/About";
import Contributors from "../Pages/Contribution";
import Login from "../Pages/Login";
import ContactUs from "../Pages/Contactus";
import Error from "../Pages/Error";
import Registration from "../Pages/Registration";
import ForgotPassword from "../Pages/ForgotPassword";
import Branches from "../Pages/Branches";
import SemesterOverview from "../Pages/Semester";

function Landing_pageRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPresentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contactus" element={<ContactUs />} />
        <Route path="/contributor" element={<Contributors />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/registration" element={<Registration />} />
        <Route path="/admin/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/branch" element={<Branches />} />
        <Route path="/branch/:branch" element={<SemesterOverview />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Landing_pageRoutes;






