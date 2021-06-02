import { useEffect, useState } from "react";
import { getFromPath, put } from "../../helpers";
import { useValidate } from "../../Validator";

export default function EasyForm({
    render = () => {},
    initialValues = {},
    schema: { schema, validator } = {},
    onSubmit = () => {},
    mapValues = (values) => values,
}) {
    const [values, setValues] = useState(initialValues);
    const { isValid, errors } = useValidate(values, schema, validator);

    function onSubmitListener(ev) {
      ev.preventDefault();
      onSubmit({ ev, errors, isValid, values: mapValues(values) });
    }

    function input(name, onChange = () => {}) {
      const value = getFromPath(name, values);
      const checked = getFromPath(name, values, false);
      const onChangeListener = (e) => {
        const { target: { type, value, checked, name } } = e;
        const inputValue = type === "radio" || type === "checkbox" ? checked : value;
        
        put(name, values, inputValue);
        onChange(mapValues(values), e);
        setValues({ ...values });
      };
      const props = {
        name,
        onChange: (e) => {
          onChangeListener(e);
        },
        value,
        checked,
        id: name,
        isNotEmpty: value !== "",
      };

      return props;
    }

    return render({ setValues, values, mappedValues: mapValues(values), input, onSubmit: onSubmitListener, errors,  isValid, mapValues });
}