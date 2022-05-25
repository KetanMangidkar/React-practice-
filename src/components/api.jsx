
//https://newsapi.org/v2/top-headlines?country=in&apiKey=92d43fca798f43f0b6a5ff1719bba48d

import React,{useState} from "react";
import axios from "axios";

export const Apifetch = ()=>{
    const [news, setNews] = useState([]);


    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=92d43fca798f43f0b6a5ff1719bba48d")
        .then((res) => {
            console.log(res.data);

            setNews(res.data.articles)
        })
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <button onClick={fetchNews}>Fetch</button>
                </div>
            </div>
        </div>
        <div>
            {
                news.map((e)=>{
                    return(
                        <div>
                        <h1>{e.title}</h1>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}
