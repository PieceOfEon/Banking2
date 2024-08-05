import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cards from "./pages/Cards";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import DepositesUpdate from "./pages/DepositesUpdate";
import InvestmentsUpdate from "./pages/InvestmentsUpdate";
import InsuranceUpdate from "./pages/InsuranceUpdate";
import LoansUpdate from "./pages/LoansUpdate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ForBusiness from "./pages/ForBusiness";
import FAQ from "./pages/FAQ";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/cards":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/deposites-update":
        title = "";
        metaDescription = "";
        break;
      case "/investments-update":
        title = "";
        metaDescription = "";
        break;
      case "/insurance-update":
        title = "";
        metaDescription = "";
        break;
      case "/loans-update":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
      case "/for-business":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/deposites-update" element={<DepositesUpdate />} />
      <Route path="/investments-update" element={<InvestmentsUpdate />} />
      <Route path="/insurance-update" element={<InsuranceUpdate />} />
      <Route path="/loans-update" element={<LoansUpdate />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/for-business" element={<ForBusiness />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
export default App;
