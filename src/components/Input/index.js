import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, error, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} {...rest} />
      {error && <span style={{color: 'red', fontSize: '0.875rem'}}>{error}</span>}
    </>
  );
}
