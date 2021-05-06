import { useEffect, useState } from 'react';
import errorsMessages from './errors';

export default class Validator {
  constructor(errors) {
    this.errors = errors;
  }

  messages(errors) {
    this.errors = {
      ...this.errors,
      ...errors,
    }
  }

  validateOnce(rules, value) {
    const errors = [];
    Object.entries(rules).forEach(([rule, args]) => {
      if (rule === 'one') return;
      if (!this[rule](value, ...args)) {
        errors.push(this.errors[rule](...args));
      }
      
      this.isValid = !errors.length;
      if (this.isAllValid === null || this.isAllValid) {
        this.isAllValid = this.isValid;
      }
    });

    return errors;
  }

  validate(values, schema) {
    this.isAllValid = null;

    const errors = {};
    Object.entries(schema).forEach(([name, rules]) => {
      errors[name] = [];
      const vals = values[name];
      const isRequired = (rules.required || [])[0];
      const onlyFirstValid = (rules.one || [])[0];

      if (isRequired || vals) {
          this.isValid = true; 
          if (Array.isArray(vals)) {
            if (!vals.length) {
              return errors[name].push(this.validateOnce(rules));
            }

            for (const val of vals) {
              errors[name].push(this.validateOnce(rules, val));
              if (this.isValid && onlyFirstValid) {
                errors[name] = [];
                break;
              }
            }
          } else {
            errors[name].push(...this.validateOnce(rules, vals));
          }
      }
    });

    return [errors, this.isAllValid];
  }

  __extend(functionName, [fn, message]) {
    this.errors[functionName] = message;
    this[functionName] = fn;
  }

  required(value) {
    return !!value;
  }

  minLength(value, min) {
    return value.length >= min;
  }

  maxLength(value, max) {
    return value.length <= max;
  }
}


const validator = new Validator(errorsMessages);
export const validateSchema = {
  schema: {},
  validator,
  create() {
    return {
      add: this.add,
      schema: {},
      validator,
      create: this.create,
    };
  },
  add(names, rules) {
    names.forEach(name => {
      if (!this.schema[name]) {
        this.schema[name] = {};
      }
      
      Object
        .entries(rules)
        .map(([method, args]) => {
          if (args === undefined) args = [];
          if (!Array.isArray(args)) args = [args];

          this.schema[name][method] = args;
        });
    });

    return this;
  }
}

export function useValidate(values, schema, validator) {
  const [[ errors, isValid ], setResult] = useState(validator.validate(values, schema));

  useEffect(() => {
    setResult(validator.validate(values, schema));
  }, [values]);

  return { errors, isValid };
}