import styled from "styled-components";
import Button from "../Button";
import FormField from "../FormField";
import Input from "../Input";

export const AnswerInputContainer = styled.div`
    position: relative;
    padding: 0;
    border: 1px solid rgb(0 0 0 / 20%);
    &:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
    }
    margin-bottom: 30px;
`;

export const AnswersGroup = styled.div`
    padding: 0;
`;

export const AnswerActions = styled.div`
    display: flex;
    align-items: center;
`;

export const AnswerInput = styled(Input)`
    border: 0;
    border-bottom: 1px solid rgb(0 0 0 / 20%);
`;

export const AnswerFormField = styled(FormField)`
    margin: 0;
    width: 100%;
    padding: 0;
`;

export const AddAnswerButton = styled(Button)`
    margin-top: 0;
    margin-bottom: 23px;
`
