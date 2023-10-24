import { Alert } from "react-bootstrap"


const Welcome = ()=> {
    return (
        <Alert variant="primary" className="rounded-0">
            <Alert.Heading>Benvenuti in Epibooks!</Alert.Heading>
            <p>Scegliete i libri che più vi aggradono.</p>
        </Alert>
    )
}

export default Welcome