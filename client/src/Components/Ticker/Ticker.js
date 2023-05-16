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
            //**********************************************************************************************************************
            // css adjustment local testing seed json file. Uncomment to make css changes to avoid rate limits on CoinGecko api call
            // const dataCall = await fetch(`/seed-ticker.json`, {
            //     headers : {
            //         "Accept": "application/json"                
            //     },
            //     method: 'GET',
            // });
            // console.log(dataCall);
            //**********************************************************************************************************************
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
                            {data.map((tokenData) =>
                                <div className='ticker row-md-12' key={tokenData.id}>
                                    <div className='ticker-logo-images'>
                                        <img  src={tokenData.image} alt={`${tokenData.id} logo from CoinGecko`}  />
                                    </div>
                                    <div className='ticker-text'>
                                        <p>{tokenData.symbol}</p>
                                        <p>{tokenData.price_change_percentage_24h}</p>
                                        
                                    </div>
                                </div>
                            )}
                        </Marquee>
                    </div> 
                : 
                    <></>
                }
            </div>
        </div>
       
    )



}