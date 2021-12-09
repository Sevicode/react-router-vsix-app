import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export const Contact = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'message') {
            setMessage(value)
        }
    }


    return (
        <Container>
            <Form>
                <Form.Group controlId="ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" value={message} name={message} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </Container>
    )
}
