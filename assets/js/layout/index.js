import Main from "./main";


export default function Layout({ children }) {
  return (
    <div className={StyleSheet.layout}>
      <Main>
        {children}
      </Main>
    </div>
  )
}