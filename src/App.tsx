
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavHeader } from "./components/NavHeader";
import { FooterComponent } from "./components/FooterComponent"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
