import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./Component/DarkMode/DarkMode";
import { NavBar } from "./Component/NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./Pages/Home";
import DetailPage from "./Pages/Detail";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 font-montserrat">
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/detail/:id" Component={DetailPage} />
            </Routes>
          </Provider>
          <Footer />
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  );
}

export default App;
