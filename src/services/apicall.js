import React, { useEffect, useState} from "react";


const CallAPI = (props) => {

    const [data, setData] = useState({});
    const url = props.url;

    const fetchData = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.results))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return(Object.keys(data).length > 0 ? (<div>
        call API
        <div>
            {data.map((object, index) => {
                const firstName = object.name.first
                const lastName = object.name.last
                const title = object.name.title
                return (<div key={index}>
                    <h3>first name: {firstName}</h3>
                    <h3>last name: {lastName}</h3>
                    <h3>title: {title}</h3>
                </div>)
            })}
        </div>


    </div>) : (
        <div>
            data is pending
        </div>
    )
        
    )
}

export default CallAPI;