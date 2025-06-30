import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './paginas/principal/principal';
import NoPage from './paginas/noPage/nopage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="us" element={<AboutUsPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="schools" element={<SchoolsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="where-are-we" element={<WhereAreWePage />} />
          <Route path="reseller" element={<ResellerPage />} />
          <Route path="contact" element={<ContactPage />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
