import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';
import { Component} from 'react';
import { Form } from 'react-bootstrap';




class BookList extends Component {

  state = {
    searchTerm: ''
  }

  render () {
    const { books } = this.props;
    

    const filteredBooks = books.filter(book=>{
       return book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return(
    <Container>
            <h2>Cerca i tuoi libri</h2>
        <Form className="mb-3">
          
            <Form.Control
             type="text"
             placeholder="Cerca per titolo..."
             value={this.state.searchTerm}
             onChange={(e) => {
               this.setState({
                 searchTerm: e.target.value
               });
              
             }}
            />
        </Form>

        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4     justify-content-center'>
            {filteredBooks.map((book)=>{
                return <SingleBook key={book.asin} objBook={book}/>
            })}
        </Row>
    </Container>
    )
  }

}


export default BookList