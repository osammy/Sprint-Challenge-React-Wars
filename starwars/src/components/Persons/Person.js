import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Person = (props) => {
    const {name,birth_year,films} = props;
  return (
  /*<Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{birth_year}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {films ? films.length: ""} Films
      </a>
    </Card.Content>
  </Card>*/

    // <Card.Group>
    <Card>
      <Card.Content>
        {/*<Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />*/}
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{birth_year}</Card.Meta>
        <Card.Description>
          {name} has starred in <strong>{films ? films.length: ""} Films</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Species
          </Button>
          <Button basic color='red'>
            Films
          </Button>
        </div>
      </Card.Content>
    </Card>
   
  // </Card.Group>
)}

export default Person;