import React from 'react';
import {AppButton} from '.';
import {useFormikContext} from 'formik';

const AppFormSubmitButton = ({title}) => {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default AppFormSubmitButton;
