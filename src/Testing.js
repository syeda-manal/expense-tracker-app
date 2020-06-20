import React from 'react'

export default function Testing() {
    let personnel = [
        {
          id: 5,
          name: "Luke Skywalker",
          pilotingScore: 98,
          shootingScore: 56,
          isForceUser: true,
        },
        {
          id: 82,
          name: "Sabine Wren",
          pilotingScore: 73,
          shootingScore: 99,
          isForceUser: false,
        },
        {
          id: 22,
          name: "Zeb Orellios",
          pilotingScore: 20,
          shootingScore: 59,
          isForceUser: false,
        },
        {
          id: 15,
          name: "Ezra Bridger",
          pilotingScore: 43,
          shootingScore: 67,
          isForceUser: true,
        },
        {
          id: 11,
          name: "Caleb Dume",
          pilotingScore: 71,
          shootingScore: 85,
          isForceUser: true,
        },
      ];
      let jediPersonnel = personnel.reduce((accu, person) => (person.isForceUser? accu + person.pilotingScore+person.shootingScore : accu), 0);
      //  const jediPersonnel = personnel.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);

      // const jediPersonnel = personnel
      // .filter(person => person.isForceUser)
      // .map(jedi => jedi.pilotingScore + jedi.shootingScore)
      // .reduce((acc, score) => acc + score, 0);    
    return (
        <div>
            <h1>hello world is {jediPersonnel}</h1>
            
            
        </div>
    )
}


