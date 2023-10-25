import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';
import { useState } from 'react';


const BookList =()=>{
   const listOfBooks = [
        {
            "asin": "0316438960",
            "title": "The Last Wish: Introducing the Witcher",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
            "price": 9.59,
            "category": "fantasy"
          },
          {
            "asin": "0316389706",
            "title": "Sword of Destiny (The Witcher)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
            "price": 10.39,
            "category": "fantasy"
          },
          {
            "asin": "0385349947",
            "title": "Lean In: Women, Work, and the Will to Lead",
            "img": "https://images-na.ssl-images-amazon.com/images/I/81coZ37EmxL.jpg",
            "price": 14.3,
            "category": "history"
          },
          {
            "asin": "0062363603",
            "title": "Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race",
            "img": "https://images-na.ssl-images-amazon.com/images/I/71O3WN6oyzL.jpg",
            "price": 9.75,
            "category": "history"
          },
          {
            "asin": "006113922X",
            "title": "Florida Roadkill: A Novel (Serge Storms)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51Xg-CTAszL.jpg",
            "price": 13.52,
            "category": "horror"
          },
          {
            "asin": "0062381652",
            "title": "The Bone Labyrinth: A Sigma Force Novel (Sigma Force Novels)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51SxxMdEk8L.jpg",
            "price": 6.54,
            "category": "horror"
          },
          {
            "asin": "0425262227",
            "title": "The Tower (Guardians of Destiny)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
            "price": 9.52,
            "category": "romance"
          },
          {
            "asin": "0316505382",
            "title": "Blood Oath (Sawbones)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/71cLSp4y22L.jpg",
            "price": 15.19,
            "category": "romance"
          },
          {
            "asin": "1773840509",
            "title": "The Cyborg's Stowaway: In the Stars Romance (Gypsy Moth)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51mV63NrjdL.jpg",
            "price": 3.73,
            "category": "scifi"
          },
          {
            "asin": "1732587035",
            "title": "Apparent Power: Diazem Trilogy, Book One",
            "img": "https://images-na.ssl-images-amazon.com/images/I/61Q5NcIAeaL.jpg",
            "price": 8.65,
            "category": "scifi"
          },
          {
            "asin": "1944866191",
            "title": "Girl Like a Bomb",
            "img": "https://images-na.ssl-images-amazon.com/images/I/61yFOVwNcML.jpg",
            "price": 16.55,
            "category": "scifi"
          },
          {
            "asin": "1982609494",
            "title": "Polaris Rising: A Novel",
            "img": "https://images-na.ssl-images-amazon.com/images/I/810hI5IL-HL.jpg",
            "price": 24.05,
            "category": "scifi"
          },
    ]
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = listOfBooks.filter(book=>{
       return book.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return(
    <Container>
        <div className="mb-3">
            <h2>Cerca i tuoi libri</h2>
            <input
              type="text"
              placeholder="Cerca per titolo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <Row className='row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4     justify-content-center'>
            {filteredBooks.map((book,index)=>{
                return <SingleBook key={book.asin} objBook={book}/>
            })}
        </Row>
    </Container>
    )
}

export default BookList