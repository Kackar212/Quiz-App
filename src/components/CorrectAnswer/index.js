import CustomCheckbox from "../CustomCheckbox";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function CorrectAnswer({ id, errors, input, name }) {
    return (
        <FormField errors={errors}>
            <Input {...input(name)} type="checkbox" id={`correct_answer_${id}`}/>
            <Label 
                htmlFor={`correct_answer_${id}`}
                position="static"
            >
                Poprawna odpowiedź
                <CustomCheckbox />
            </Label>
        </FormField>
    );
}
