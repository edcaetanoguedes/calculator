import Main from "./main";


export default function Layout({ children }) {
  return (
    <div className={"layout"}>
      <Main>
        {children}
      </Main>
    </div>
  )
}