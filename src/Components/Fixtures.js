import React, { useEffect, useState } from "react";

const Fixtures = () => {

    //GET REQUEST 

    const [fixtures, setFixtures] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/fixtures')
        .then((response) => response.json())
        .then((data) => setFixtures(data))
    },[])

    //POST REQUEST 
    const [teams, setTeams] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [match, setMatch] = useState("")
    

    const addData = (e) => {
        e.preventDefault();

        const formData = {
            teams:teams,
            date:date,
            time:time
        }

        fetch('http://localhost:5000/fixtures', {
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => setMatch(data))
        .catch((error) => {
            console.log('Error', error)
        })
    }

    return (
        <div className="fixture">
            <form onSubmit={addData}>
                <input type="text" placeholder="Enter match" value={teams} onChange={(e) => setTeams(e.target.value)}/> <br/>
                <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/> <br/>
                <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)}/> <br/>
                <button >Submit</button>
            </form>
            {fixtures.map((fixture) => (
                <>
                <h3>{fixture.teams}</h3> 
                <h4>Date: {fixture.date}</h4>
                <p>Time: {fixture.time}</p>
                </>
            ))}
        </div>
    )
}

export default Fixtures