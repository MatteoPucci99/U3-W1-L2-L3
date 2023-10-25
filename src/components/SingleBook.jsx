

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Component } from "react"

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
      const { objBook } = this.props;
      const { selected } = this.state
      const border = {
        border: '2px solid red',
      }
  
      return (
        <Col className='mb-3 col-8 col-md'>
          <Card className='h-100' style={selected ? border : {}}
                onClick={() => this.setState({ selected: true })}>
            <Card.Img variant="top" src={objBook.img} className='h-75' />
            <Card.Body className='d-flex flex-column justify-content-end '>
              <Card.Title className='text-truncate'>{objBook.title}</Card.Title>
              <Card.Text>
                Al prezzo di {objBook.price}€
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }
  }
  
  export default SingleBook;