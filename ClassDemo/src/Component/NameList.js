import React from 'react'

function NameList(props) {
    const myLists = props.data;
    const listItems = myLists.map((myList, index) =>
        <p key={index}>{myList}</p>
    )

    return (
        <>
            <h2>My Address</h2>
            <h5>{listItems}</h5>
        </>
    )
}

export default NameList
