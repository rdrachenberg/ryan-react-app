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
            
            return response
        } catch (err) {
            console.log('You have an error: ');
            console.log(err);
            
            return err;
        }
    }

    useEffect(() => {
        const callInterval = setInterval(() => {
            getMarketData();
        }, 30000);

        // clean up
        return () => {
            clearInterval(callInterval)
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      getMarketData().then(() => {
        console.log(data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

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
                                        {Math.sign(Number(tokenData.price_change_percentage_24h)) === -1 ? 
                                            <p style={{color: 'red'}}>{Number(tokenData.price_change_percentage_24h).toFixed(3)}%</p>
                                        : 
                                            <p style={{color: 'green'}}>{Number(tokenData.price_change_percentage_24h).toFixed(3)}%</p>
                                        }
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