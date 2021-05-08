import { NavigationLink } from "../Navigation/styles";
import { MessageContainer, MessageContent, MessageLink } from "./style";

export default function Message({ message, to, link }) {
    return (
        <MessageContainer>
            <MessageContent>{ message }</MessageContent>
            <MessageLink to={to}>{link}</MessageLink>
        </MessageContainer>
    )
}