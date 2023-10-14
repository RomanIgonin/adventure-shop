import React from 'react';

type InputType = 'email' | 'password';

interface Props {
  type: InputType;
  placeholder: string;
}

const UDInput = (props: Props) => {
  const { type, placeholder } = props;

  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default UDInput;
