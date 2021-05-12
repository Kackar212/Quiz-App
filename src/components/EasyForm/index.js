import { useState } from "react";
import { getFromPath, put } from "../../helpers";
import { useValidate } from "../../Validator";

export default function EasyForm({
    render = () => {},
    initialValues = {},
    schema: { schema, validator } = {},
    onSubmit = () => {},
}) {
    const onChangeListener = ({ target: { type, value, checked, name } }) => {
      const inputValue = type === "radio" || type === "checkbox" ? checked : value;
      
      put(name, values, inputValue);
      setValues({ ...values });
    };

    const [values, setValues] = useState(initialValues);
    const { isValid, errors } = useValidate(values, schema, validator);

    function onSubmitListener(ev) {
      onSubmit({ ev, errors, isValid  })
    }

    function input(name) {
      const value = getFromPath(name, values);
      const checked = getFromPath(name, values, false);
      
      const props = {
        name,
        onChange: onChangeListener,
        value,
        checked,
        id: name,
        isNotEmpty: value !== "",
      };

      return props;
    }

    return render({ setValues, values, input, onSubmit: onSubmitListener, errors,  isValid });
}