import { useMutation } from "react-query";
import { validateSchema } from "../../Validator";
import Button from "../Button";
import EasyForm from "../EasyForm";
import Form from "../Form";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

const schema = validateSchema
  .create()
  .add(['email', 'password'], {
    required: true,
  })
  .add(['password'], {
    minLength: 10,
  })
  .add(['email'], {
    isEmail: true,
  })

export default function AuthForm({
  title, 
  apiFunction = () => {}, 
  successMessage,
  afterRequest = () => {},
}) {
  const id = Math.floor(Math.random() * 999);
  const { mutate, isLoading, data = {} } = useMutation('auth' + id, apiFunction, { onSuccess: afterRequest });

  return (
    <EasyForm
      schema={schema}
      onSubmit={async ({ values }) => {
        mutate(values);
      }}
      initialValues={{
        email: '',
        password: ''
      }}
      render={({ input, onSubmit, errors: { email, password } }) => 
        <Form 
          onSubmit={onSubmit}
          errorMessage={data.error}
          successMessage={successMessage}
          isSuccess={data.statusCode === 200 || data.statusCode === 201}
        >
          <h2>{ title }</h2>
          <FormField errors={email}>
            <Input {...input('email')} type="email" id={`email-${id}`} disabled={isLoading}/>
            <Label htmlFor={`email-${id}`}>Email</Label>
          </FormField>
          <FormField errors={password}>
            <Input type="text" {...input('password')} id={`password-${id}`} disabled={isLoading}/>
            <Label htmlFor={`password-${id}`}>Password</Label>
          </FormField>
          <Button type="submit" isLoading={isLoading}>
            { title }
          </Button>
        </Form>
    }/>
  );
}