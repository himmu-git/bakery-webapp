import { useEffect,useState } from "react"
const useGetData = ({endpoint})=> {
    const [data, setData] = useState({})
    const url =  `https://raw.githubusercontent.com/himmu-git/json-server/main/${endpoint}.json`

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url)
            const data = await res.json();
            setData(data);
            return data;
        }
        getData();
    
      return () => {
        // cleanup
      }
    }, [])
    return data;
    

}

export default useGetData;