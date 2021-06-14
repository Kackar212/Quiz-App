import CustomCheckbox from "../CustomCheckbox";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function Answer({ questionId, formState: { errors, input }, result, correctAnswers, answer: { answer: content, id }, index }) {
    const isCorrectAnswer = result === undefined ? result : !!correctAnswers.find(answer => answer === id);
    return (
        <FormField errors={errors[questionId][index]}>
            <Input type="checkbox" { ...input(`answers[${questionId}][${index}]`) } disabled={result !== undefined} id={`answer_${questionId}_${index}`} data-answer-id={id}/>
            <Label 
                htmlFor={`answer_${questionId}_${index}`}
                position="static"
                isCorrectAnswer={isCorrectAnswer}
                color={result !== undefined && '#fff'}
            >
                {index + 1}. {content}
                <CustomCheckbox />
            </Label>
        </FormField>
    );
}