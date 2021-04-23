import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function Answer({ questionId, answer: { answer: content, id }, index }) {
    return (
        <FormField>
            <Input type="checkbox" name={`answer-${questionId}`} id={`answer_${id}`} data-answer-id={id}/>
            <Label htmlFor={`answer_${id}`}>{index + 1}. {content}</Label>
        </FormField>
    );
}