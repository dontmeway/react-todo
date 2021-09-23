import React from 'react'




export function Heading({value, removeHeading, dataColor}) {
    const [color, setColor] = React.useState()

    React.useEffect(() => {
        setColor(dataColor)
    }, [])

    return (

            <li className = "heading">
                <span style ={{backgroundColor: color}}></span>
                {value}
                <img onClick = {() => removeHeading(value)} src = "/images/remove.svg" alt = "removeBtn"/>
            </li>

    )
}