import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Fixtures = () => {

    //GET REQUEST 

    const [fixtures, setFixtures] = useState([])
    const[query, setQuery] = useState("")

    useEffect(() => {
        fetch('http://localhost:5000/fixtures?q=' + query)
        .then((response) => response.json())
        .then((fixtures) => setFixtures(fixtures))
        .catch((error) => console.log('Error fetching and parsing json:', error))
    },[query])

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    //POST REQUEST 
    const [teams, setTeams] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    
    

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
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then(() =>setFixtures([...fixtures, formData]))
        

        
        .catch((error) => {
            console.log('Error', error)
        })
        console.log(formData)
    }

    //DELETE REQUEST

    const handleteams = (thisTeam) => {
        setFixtures(fixtures.filter((team) => team.id !== thisTeam.id))
    }

    const deleteTeam = (thisTeam) => {
        fetch(`http://localhost:5000/fixtures/${thisTeam.id}`, {
            method:'DELETE',
        })
        .then((response) => response.json())
        .then(() => handleteams(thisTeam))
    }

    return (
        <div className="fixture">
            <SearchBar handleSearch={handleSearch}/>
            <form >
                <input type="text" placeholder="Enter match" onChange={(e) => setTeams(e.target.value)}/> <br/>
                <input type="text" placeholder="Date" onChange={(e) => setDate(e.target.value)}/> <br/>
                <input type="text" placeholder="Time" onChange={(e) => setTime(e.target.value)} /> <br/>
                <input type="submit" value="add" onClick={addData}></input>
            </form>
            {fixtures.map((fixture,index) => (
                <div key={index}>
                <h3 >{fixture.teams}</h3> 
                <h4>Date: {fixture.date}</h4>
                <p>Time: {fixture.time}</p>
                <button onClick={() => deleteTeam(fixture)}>DELETE</button>
                </div>
            ))}
        </div>
    )
}

export default Fixtures