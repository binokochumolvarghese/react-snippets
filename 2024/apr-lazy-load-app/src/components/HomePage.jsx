import { Suspense, lazy, useState } from "react"; 
import Loading from "./Loading"; 

// Dynamically import the `LoadingPage` component. This delays the loading of this component until it's needed.
const LoadingPage = lazy(() => import("./LoadingPage")); 


export default function HomePage() { 
  const [clicked, setClicked] = useState(false); 

  function btnClickHandler() { 
    setClicked(!clicked); 
  }

  // Use React's Suspense to handle lazy loading. While `LoadingPage` is being loaded, show the `Loading` component.
  return (
    <>
      <h2>Home page</h2> 
      <button onClick={btnClickHandler}>Click here</button> 

      {clicked && ( 
        <Suspense fallback={<Loading />}> 
          <LoadingPage /> 
        </Suspense>
      )}
    </>
  );
}


