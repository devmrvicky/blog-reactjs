import {BackButton, ForwardButton} from "./NavigationButtons";

const Nav = () => {
  return(
    <nav className="w-full max-w-4xl mx-auto p-1 text-xl flex items-center justify-between mb-4 border-b">
      {window.navigation.canGoBack ? <BackButton /> : <p></p>}
      <h1>here will be breadcrumb</h1>
      {window.navigation.canGoForward ? <ForwardButton /> : <p></p>}
    </nav>
  )
}

export default Nav;