import Form from 'react-bootstrap/Form';

const AddComments = ()=>{
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="text" placeholder="Inserisci il commento" className='mb-2'/>
            <Form.Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Select>

     
        </Form.Group>
    )
}

export default AddComments