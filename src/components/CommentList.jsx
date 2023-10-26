import { ListGroup } from "react-bootstrap";

const CommentList = ({comments})=>{
    {console.log(comments)}
return(

    <ListGroup>
        {comments.map(el=>{

     <ListGroup.Item className="rounded-0 border border-0 d-flex justify-content-between">
        <p>{el.comment}</p>
        <p>{el.rate}</p>
     </ListGroup.Item>
        })}
    </ListGroup>
   
)
}

export default CommentList