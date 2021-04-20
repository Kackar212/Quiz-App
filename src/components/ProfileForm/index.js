import Form from "../Form";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function ProfileForm() {
  return (
    <Form>
      <FormField>
        <Input type="email" name="email" id="email" />
        <Label htmlFor="email">Email</Label>
      </FormField>
      <FormField>
        <Input type="text" name="password" id="password" />
        <Label htmlFor="password">Password</Label>
      </FormField>
    </Form>
  );
}