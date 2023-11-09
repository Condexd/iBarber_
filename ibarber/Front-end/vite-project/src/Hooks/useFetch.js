import { useEffect ,useState} from "react";
export const useFetch = (url) => {

  const [state, setState] = useState({
    data:null,
    isLoading:true,
    haserror:null,
  })
    const getFetch=async()=>{
      setState({
        ...state,
        isLoading:true,
      })
        const respo= await fetch(url);
        const data= await respo.json();
         setState({
          data:data,
          isLoading:false,
          haserror:null,
         })
      }
useEffect(() => {
  getFetch();
}, [url])

  
 return{
  data:state.data,
  isLoading:state.isLoading,
  haserror:state.haserror,

 }
}
