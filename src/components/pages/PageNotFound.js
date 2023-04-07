import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full italic">
      <h2 className="text-5xl font-semibold text-zinc-500">Post Not Found</h2>
      <p className="text-xl py-2">Well, that's disappointing</p>
      <p>
        <Link to="/" className="text-blue-600 hover:underline">Visit our homepage</Link>;
      </p>
    </div>
  )
}

export default PageNotFound
