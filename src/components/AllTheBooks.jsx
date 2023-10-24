

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

const AllTheBooks = ()=>{

return (

 <Container>
    <h2>Top 5 Libri Fantasy</h2>
        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4'>


            {fantasy.map((book, index)=>{
            
                if(index<6){

                    return (
                         <Col key={index}>

                             <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} className='h-75'/>
                                <Card.Body className='d-flex flex-column justify-content-end'>
                                     <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Al prezzo di {book.price}€
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                         </Col>
                    )
                }
            })}

        </Row>
        <h2>Top 5 Libri History</h2>
        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4'>
            
           
            {history.map((book, index)=>{
            
                if(index<6){
                
                    return (
                         <Col key={index}>
                                 
                             <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} className='h-75'/>
                                <Card.Body className='d-flex flex-column justify-content-end'>
                                     <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Al prezzo di {book.price}€
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                         </Col>
                    )
                }
            })}
            
        </Row>
        <h2>Top 5 Libri Horror</h2>
        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4'>
            
           
            {horror.map((book, index)=>{
            
                if(index<6){
                
                    return (
                         <Col key={index}>
                                 
                             <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} className='h-75'/>
                                <Card.Body className='d-flex flex-column justify-content-end'>
                                     <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Al prezzo di {book.price}€
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                         </Col>
                    )
                }
            })}
            
        </Row>
        <h2>Top 5 Libri Romance</h2>
        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4'>
            
           
            {romance.map((book, index)=>{
            
                if(index<6){
                
                    return (
                         <Col key={index}>
                                 
                             <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} className='h-75'/>
                                <Card.Body className='d-flex flex-column justify-content-end'>
                                     <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Al prezzo di {book.price}€
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                         </Col>
                    )
                }
            })}
            
        </Row>
        <h2>Top 5 Libri Scifi</h2>
        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4'>
            
           
            {scifi.map((book, index)=>{
            
                if(index<6){
                
                    return (
                         <Col key={index}>
                                 
                             <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} className='h-75'/>
                                <Card.Body className='d-flex flex-column justify-content-end'>
                                     <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    Al prezzo di {book.price}€
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                         </Col>
                    )
                }
            })}
            
        </Row>
 </Container>

)

}

export default AllTheBooks