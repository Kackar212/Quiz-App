import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function CorrectAnswer({ id }) {
    return (
        <FormField>
            <Input type="checkbox" name="correctAnswer" id={`correct_answer_${id}`}/>
            <Label htmlFor={`correct_answer_${id}`}>Poprawna odpowiedź</Label>
        </FormField>
    );
}
