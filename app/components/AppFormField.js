import React from 'react';
import {AppFormErrorMessage, AppInput} from '.';
import {useFormikContext} from 'formik';

const AppFormField = ({name, ...rest}) => {
  const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <AppFormErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default AppFormField;
