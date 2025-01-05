import React from "react";

const ListComp = () => {
    const data = [
        {'name':'apple', 'desc':'redcolor apple', 'price':12},
        {'name':'banana', 'desc':'yellow color banana', 'price':1},
        {'name':'orange', 'desc':'big orange', 'price':8}
        
    ]

    const expensivefruits = data.map(fruits => {
        const itemText = `${fruits.name} - ${fruits.price}`

        return (<li key={fruits.name}>{itemText}</li>)
    })
    console.log(expensivefruits)
    return (<div>
        <ul>
            {expensivefruits}
        </ul>
    </div>
    )
}

export default ListComp;