import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


export default function Ticker() {
    const [data, setData] = useState([]);
    
    const getMarketData = async () => {    
        try {
            const dataCall = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`, {
                headers : {
                    "Accept": "application/json"                
                },
                method: 'GET',
            });
            // console.log(dataCall);

            const response = await dataCall.json();
            setData(response);
            console.log(response);
            console.log(data);
            return response
        } catch (err) {
            console.log('You have an error: ');
            console.log(err);
            
            return err;
        }
    }

    useEffect(() => {
        getMarketData().then(() => {
            console.log(data);
            console.log(data.length);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(data)

    return (
        <div>
            <div>
                {data.length > 0 ? 
                    <div>
                    <Marquee>
                        <div>
                            {data.map((tokenData) => 
                                
                                    <img key={tokenData.id} src={tokenData.image} alt={`${tokenData.id} logo from CoinGecko`} style={{maxWidth: '50px', padding: '4px'}}/>
                                
                            )}
                        </div>
                    </Marquee>
                    </div> 
                : 
                    <></>
                }
            </div>
        </div>
       
    )



}