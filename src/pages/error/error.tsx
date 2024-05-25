import { Link, useRouteError } from "react-router-dom"
import NavBar from "../../components/navbar/navbar"

function ErrorPage() {
    const error: unknown = useRouteError()
  return (
    <>
    <NavBar/>
    <div className="w-screen h-[80vh] flex flex-col justify-center items-center">
    {(error as Error)?.message || 
    (error as { statusText?: string })?.statusText}
    <button className="border-2 rounded p-3 mt-6 bg-red-600
      transition hover:bg-red-500">
        <Link to="/">back to home</Link>
    </button>
    </div>
    </>
  )
}
export default ErrorPage