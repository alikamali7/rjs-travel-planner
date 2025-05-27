import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
