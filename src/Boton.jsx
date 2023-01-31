import { Button } from "react-bootstrap";

const Boton = (props) => {
    const { text } = props
    return (
        <Button variant="dark" type="submit">{text}</Button>
    )
}

export default Boton;