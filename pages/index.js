import LogoAnim from "../sections/logoAnim/LogoAnim";
import NavBar from "../sections/navBar/NavBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      {loading && <LogoAnim />}
      {!loading && <NavBar />}
    </>
  );
}
