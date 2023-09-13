import React, { useEffect, useState } from "react";

const Players = () => {

    const [players, setPlayers] = useState([])

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [previous1, setPrevious1] = useState('')
    const [previous2, setPrevious2] = useState('')
    const [previous3, setPrevious3] = useState('')
    const [birth, setBirth] = useState('')
    const [shirt, setShirt] = useState('')
    const [image, setImage] = useState('')


    //GET PLAYERS
    useEffect(() => {
        fetch('http://localhost:5000/players')
        .then((response) => response.json())
        .then((data) => setPlayers(data))
        .catch((error) => console.log('The error is:', error))
    })

    //POST PLAYERS
    const addPlayers = (e) => {
        e.preventDefault();
        const playerData = {
            name:name,
            position:position,
            previousteam:[
                previous1,
                previous2,
                previous3
            ],
            birth:birth,
            shirt:shirt,
            image:image
        }
        fetch('http://localhost:5000/players', {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(playerData)
        })
        .then((response) => response.json())
        .then(() => [...players, playerData])
        .catch((error) => console.log('This is caused by:', error))
    }

    //DELETE PLAYERS

    const handleDelete = (thisPlayer) => {
        setPlayers(players.filter((player) => player.id !== thisPlayer.id))
    }

    const deletePlayer = (thisPlayer) => {
        fetch(`http://localhost:5000/players/${thisPlayer.id}`,{
            method:'DELETE',

        })
        .then((response) => response.json())
        .then(() => handleDelete(thisPlayer))
    }
    return(
        <div>
            <div className="formmain">
            <form>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="position" onChange={(e) => setPosition(e.target.value)} /> 
                <input type="text" placeholder="previous team 1" onChange={(e) => setPrevious1(e.target.value)} /> 
                <input type="text" placeholder="previous team 2" onChange={(e) => setPrevious2(e.target.value)}/> 
                <input type="text" placeholder="previous team 3" onChange={(e) => setPrevious3(e.target.value)}/>
                <input type="text" placeholder="place of birth" onChange={(e) => setBirth(e.target.value)}/> 
                <input type="number" placeholder="shirt number" onChange={(e) => setShirt(e.target.value)}/> 
                <input type="text" alt="image" placeholder="image url" onChange={(e) => setImage(e.target.value)}/> 
                
                <button type="submit" onClick={addPlayers}>Add</button>
                
                
            </form>
            </div>

            <div className="allplayers">
            <h1>Chelsea Players 2023/2024</h1>
            {players.map((player) => (
                <div key={player.id}>
                    <button onClick={() => deletePlayer(player)}>Delete</button>
                    <h2>{player.name}</h2>
                    <h3>Position: {player.position}</h3>
                    <div>
                        <h4>Previous Teams: </h4>
                        
                        {player.previousteam.map((team, index) => (
                            <p key={index}>{team}</p>
                        ))}
                       
                    </div>
                    <strong>Place of Birth: {player.birth}</strong>
                    <p>Shirt Number: {player.shirt}</p>
                    <img src={player.image}></img>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Players