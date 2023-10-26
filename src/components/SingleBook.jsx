

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Component } from "react"
import CommentArea from './CommentArea';


class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
      const { objBook } = this.props;
      const border = {
        border: '2px solid red',
        
      }
  
      return (
        <Col className='mb-3 col-8 col-md mb-5'>
          <Card className='h-100'>
            <Card.Img variant="top" src={objBook.img} className='h-75' onClick={() => this.setState({ selected: !this.state.selected })}/>
            <Card.Body className='d-flex flex-column justify-content-end '>
              <Card.Title className='text-truncate'>{objBook.title}</Card.Title>
              <Card.Text>
                Al prezzo di {objBook.price}€
              </Card.Text>
            </Card.Body>
          {this.state.selected && (<CommentArea/>) }
          </Card>
        </Col>

      );
    }
  }
  
  export default SingleBook;