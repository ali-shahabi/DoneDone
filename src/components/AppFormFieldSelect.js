import React from 'react';
import {AppFormErrorMessage, AppSelect} from '.';
import {useFormikContext} from 'formik';

const AppFormFieldSelect = ({name, placeholder, items, numberOfColumns}) => {
  const {values, setFieldValue, touched, errors} = useFormikContext();
  return (
    <>
      <AppSelect
        onSelectItem={item => setFieldValue(name, item)}
        // selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        title={placeholder}
        items={items}
      />
      <AppFormErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default AppFormFieldSelect;
