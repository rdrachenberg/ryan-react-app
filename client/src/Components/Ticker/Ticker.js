import { useEffect, useState } from "react";



export function Ticker() {

    const [data, setData] = useState([]);

    

    const getMarketData = async () => {
        
        try {
            const dataCall = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`, {
                headers : {
                    "Accept": "application/json"                
                },
            // mode: 'no-cors'
            });

            console.log(dataCall);

            const response =  dataCall.then((res) => {
                let resJson = res.json();
                setData(resJson);
                console.log(resJson);

                return resJson;
            });

        
        console.log(data);

        return response

        } catch (err) {
            console.log('You have an error: ');
            console.log(err);
            
            return err;
        }
        
        


       
    }

    useEffect(() => {
        const set = getMarketData();

        setData(set);
        console.log(data);
    }, [])
    // console.log(data)

    return (
        <div>
            
        </div>
       
    )



}