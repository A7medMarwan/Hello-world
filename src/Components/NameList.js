import React from 'react'
import Person from './Person'

export default function NameList() {
    const persons = [
        {
            id: 1,
            name: "Ahmed",
            age: 23,
            skill: "react"
        },
        {
            id: 2,
            name: "Maro",
            age: 55,
            skill: "Vue"
        },
        {
            id: 3,
            name: "Tarek",
            age: 23,
            skill: "Angular"
        }
    ]

    const personList = persons.map((person, index)=>{
        return <Person key = {index} person = {person}/>
    })

    return (
        <div>
            {personList}
        </div>
    )
}


