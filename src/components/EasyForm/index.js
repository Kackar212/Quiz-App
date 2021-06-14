import { useEffect, useState } from "react";
import { createFromPath, getFromPath, put } from "../../helpers";
import { useValidate } from "../../Validator";

export default function EasyForm({
    render = () => {},
    initialValues = {},
    schema: { schema, validator } = {},
    onSubmit = () => {},
    mapValues = (values) => values,
}) {
    const [values, setValues] = useState(initialValues);
    const { isValid, errors } = useValidate(values, initialValues, schema, validator);
    
    async function onSubmitListener(ev) {
      ev.preventDefault();
      onSubmit({ ev, errors, isValid, originalValues: values, values: mapValues(values), setValues });
    }

    function input(name, onChange = () => {}) {
      const value = getFromPath(name, values, '');
      const checked = getFromPath(name, values, false);

      const onChangeListener = (e) => {
        const { target: { type, value, checked, name } } = e;
        const inputValue = type === "radio" || type === "checkbox" ? checked : value;

        setValues(prevValues => {
          const newValues = { ...prevValues };

          put(name, newValues, inputValue);
          onChange(mapValues(newValues), e);

          return newValues;
        });
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

    return render({ setValues, values, initialValues, mappedValues: mapValues(values), input, onSubmit: onSubmitListener, errors,  isValid, mapValues });
}