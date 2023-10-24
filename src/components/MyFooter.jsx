import { Container } from "react-bootstrap"


const MyFooter = ()=>{

    return (
        <Container fluid className="d-flex justify-content-between mt-5 bg-secondary text-white p-3">
            <p className="mb-0">Epibooks</p>
            <p className="mb-0">Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>
        </Container>
    )

}

export default MyFooter