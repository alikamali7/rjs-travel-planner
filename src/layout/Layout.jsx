import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
import { Container } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
