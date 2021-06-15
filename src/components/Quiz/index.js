import { validateSchema } from "../../Validator";
import EasyForm from "../EasyForm";
import Tags from "../Tags";
import QuizForm from '../QuizForm';
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { UserContext } from "../../context/User";
import Input from "../Input";
import { authPost } from "../../api";
import { QuizContainer, QuizTitle } from "./style";
import Button from "../Button";
import FormField from "../FormField";
import Form from "../Form";

const userNameSchema = validateSchema.create()
    .add(['userName'], { required: true });

function addValidationRules(index, schema) {
    schema.add([`answers[${index}]`], {
        required: true,
        one: true,
    });
}

function createInitialValues(schema) {
    return (values, { answers }, index) => {
        addValidationRules(index, schema);

        values.answers.push(Array(answers.length).fill(false));

        return values;
    }
}

export default function Quiz({ id, name, questions, tags, dummy = false, setQuiz }) {
    const { auth, user } = useContext(UserContext);
    
    const schema = validateSchema.create();
    const initialValues = questions.reduce(createInitialValues(schema), { answers: [] });

    const [result, setResult] = useState();
    const [userName, setUserName] = useState(user.name);

    const { mutateAsync, data = {}, isLoading } = useMutation('checkAnswers', ({ answers, userName }) => {
        return authPost('quizzes/' + id + '/answers', {
            userName,
            answers,
        });
    });

    async function getResult(reducedAnswers, userName) {
        const { statusCode, ...response } = await mutateAsync({ answers: reducedAnswers, userName });
            const result = Object
                .values(response)
                .reduce((result, [ isQuestionCorrect ]) => isQuestionCorrect ? ++result : result, 0);
            setResult(result);
    }

    async function checkAnswers({ ev, values: { answers } }) {
        ev.preventDefault();

        const reducedAnswers = questions.reduce(
            (prevAnswers, { id, answers: questionAnswers }, index) => (
                { 
                    ...prevAnswers,
                    [id]: answers[index].map((answer, index) => answer && questionAnswers[index].id).filter(Boolean),
                }
            )
        , {});

        getResult(reducedAnswers, userName);
    }

    return auth  || userName ? (
        <QuizContainer>
            <QuizTitle>{name}</QuizTitle>
            <Tags tags={tags}/>
            <EasyForm
                schema={schema}
                onSubmit={checkAnswers}
                initialValues={initialValues}
                render={({ onSubmit, errors: { answers }, input, setValues, values }) => (  
                    <QuizForm
                        dummy={dummy}
                        onSubmit={onSubmit}
                        formState={{ errors: answers, input, setValues, values }}
                        questions={questions}
                        setQuiz={setQuiz}
                        data={data}
                        isLoading={isLoading}
                    />
                )}
            />
            { result !== undefined && <p>Twój wynik to {result}/{questions.length}</p> }
        </QuizContainer>
    ) : <EasyForm
            initialValues={{ userName: '' }}
            schema={userNameSchema}
            render={({ input, values: { userName } }) => (       
                <Form>
                    <FormField>
                        <Input id="user_name" {...input('userName')}/>
                    </FormField>
                    <Button 
                        type="button"
                        onClick={(e) => setUserName(userName)}
                    >Rozpocznij quiz!</Button>
                </Form>
            )}
        />
}