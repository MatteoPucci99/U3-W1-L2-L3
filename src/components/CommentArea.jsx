import { Component } from "react";
import CommentList from "./CommentList";
import { Container } from "react-bootstrap";
import AddComments from "./AddComments";



class CommentArea extends Component {

    state={
        listOfComments: []
    }
    getComments = ()=>{
        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTYyZmY2ZTNkZDAwMTQ5NWU0M2EiLCJpYXQiOjE2OTgzMjE5NjcsImV4cCI6MTY5OTUzMTU2N30.dnke5CJXf050s7ul25Lsh-BgqmyLk_3yCxtPWGY3WRc"
            }
        })
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore')
            }
        })
        .then(data=>{
            console.log(data)
            this.setState({
                listOfComments: data
            })
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

   

    componentDidMount() {
        this.getComments()
        
      }
    
    render() {
        return (
            <Container>
                <CommentList comments={this.state.listOfComments}/>
                <AddComments/>
            </Container>
        )
    }
}

export default CommentArea