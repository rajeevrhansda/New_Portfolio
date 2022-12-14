import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from "@emailjs/browser";


const ContactContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;
`;
const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
`;

const Card = styled.div`
    display: flex;
    @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
    }
`;
const CardLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
const SocialCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    border-radius: 10px;
    padding: 2em 4em;
    margin-top: 2em;
    color: white;
    background-color: ${({ theme }) => theme.themeColor};
`;
const CardRight = styled.div`
    flex: 1;
    margin-top: 4em;
    `;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1em;
    height: 100%;
`;
const Input = styled.input`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.themeColor};
    border-radius: 10px;
    padding: 1em;
    color: ${({ theme }) => theme.text};
`;
const Textarea = styled.textarea`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.themeColor};
    border-radius: 10px;
    padding: 1em;
    color: ${({ theme }) => theme.text};
`;
const SendButton = styled.button`
    background-color: ${({ theme }) => theme.themeColor};
    border: none;
    border-radius: 20px;
    padding: 1em;
    color: white;
    padding: 1em 4em;
    width: max-content;
`;
function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uepaghw', 'template_a0zwu09', form.current, 'YRS6_UH0J2pBikz0a')
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <ContactContainer id='contact'>
            <PageTitle>Contact</PageTitle>
            <Card>
                <CardLeft>

                    <h2 >Get in Touch</h2>
                    <SocialCard>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="contact__option-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                        <h4>Whatsapp</h4>
                        <h5>7766021895</h5>
                        <a href="https://api.whatsapp.com/send?phone=7766021895" target="_blank" rel="noreferrer" style={{color: "Black"}}>Send a message</a>
                    </SocialCard>
                    <SocialCard>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="contact__option-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fillRule="nonzero" d="M7.764 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7S16.585 4 12 4s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157zM12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633z"></path></g></svg>
                        <h4>Messenger</h4>
                        <h5>rajeev.hansda</h5>
                        <a href="https://m.me/rajeev.hansada" target="_blank" rel="noreferrer" style={{color: "Black"}}>Send a message</a>
                    </SocialCard>
                </CardLeft>
                <CardRight>
                    <Form ref={form} onSubmit={sendEmail} >
                        <Input type="text" name="user_name" className="user" placeholder="Name" />
                        <Input type="email" name="user_email" className="user" placeholder="Email" />
                        <Textarea name="message" className="user" placeholder="Message" rows="5" />
                        <SendButton type="submit" value="Send" className="button">Send</SendButton>
                        <h2>{done && "Thanks for Contacting me"}</h2>
                    </Form>
                </CardRight>
            </Card>
        </ContactContainer >
    )
}

export default Contact