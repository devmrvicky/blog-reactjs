
const Footer = () => {
  const date = new Date();
  return(
    <footer className="bg-cyan-50 text-center p-3 mt-auto">
      <h1 className="text-xl text-slate-500">copyright &copy; {date.getFullYear()}</h1>
    </footer>
  )
}

export default Footer;