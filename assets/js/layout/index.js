import Footer from "./footer";
import Header from "./header";
import Main from "./main";


export default function Layout({ children }) {
  return (
    <div className={"layout"}>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </div>
  )
}