import React from 'react'
import NameList from './NameList'

function FunctionDemo() {
    const data = ["Kumar", "S/O Velu,", "15th Floor, 28 Gopal Das Bhawan, Barakhamba Lane,", "Delhi,", "Pin Code - 110001"]

    return (
        // <div>
            <NameList data={data} />
        // </div>
    )
}

export default FunctionDemo
