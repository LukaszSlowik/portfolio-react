import { useRouteError, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)
  const navigate = useNavigate()
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, some error on the page</p>
      <button
        className="m-2 rounded-md bg-slate-500 p-2 hover:bg-slate-600"
        onClick={() => navigate('/')}
      >
        {`>`} Go to Home
      </button>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  )
}
