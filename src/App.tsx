import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { Technologiestype } from "./types/technologyType";
import { ToastContainer } from "react-toastify";

const technologiesFatech = async (): Promise<Technologiestype[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const technologiesPromise = technologiesFatech();
  const [technologiesPromise] = useState(() => technologiesFatech());
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div className="flex items-center justify-center p-10"><h2>Loading.......</h2></div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
