import React from 'react';
import Person from './Person';
import {Card} from 'semantic-ui-react';
// const persons = [1,2,3];
const Persons = ({people})=>{
   return <div className="App-people-container">
          {/*{people.map((props) =><div className="col"> <Person {...props}  /></div>)}*/}
            {people.map((props) =><Card.Group> <Person {...props}  /></Card.Group>)}
          </div>
}

export default Persons;