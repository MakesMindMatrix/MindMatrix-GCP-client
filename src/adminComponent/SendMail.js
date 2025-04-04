import React from 'react'
// import StudentData from './StudentData'
import axios from 'axios'



const SendMail = () => {
    const tempData = [
        { "email": "nimishkumar9534@gmail.com" },
        { "email": "tirumal@clinf.com" },
        { "email": "platform1@clinf.com" },
        { "email": "platform@clinf.com" },
        { "email": "pragati@clinf.com" },
        { "email": "pragatipote417@gmail.com" },
        { "email": "tirumaldesai@gmail.com" },
        { "email": "pragatipote416@gmail.com" },
        { "email": "content1@clinf.com" },
        { "email": "nimishkumar9534@gmail.com" },
    ]

    const shortedData = tempData.slice(300, 349)
    // console.log(shortedData)

    const handleSubmit = () => {
        handleChange()
    }

    const handleChange = async () => {
        try {
            shortedData.map(async (elm) => {
                // console.log({"email": elm.email})
                // console.log(elm)
                const resp = await sendMail({"email": elm.email})
                console.log(resp)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <button onClick={handleSubmit}>Send Mail</button>
        </div>
    )
}

export default SendMail

export const sendMail = async (email) => {
    console.log(email)
    try {
        const result = await axios({
            method: "post",
            url: "http://localhost:3001/v1/invitation",
            data: email,
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            },
        })
        return result;
    } catch (error) {
        console.log(error)
    }
}
