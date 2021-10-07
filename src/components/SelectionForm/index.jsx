import React from 'react'
import {Formik, Form} from 'formik'
import {Checkbox, ButtonLabel} from './styles'

const SelectionForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          checked: [],
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values))
        }}
      >
        {({values}) => (
          <Form>
            <div role="group" aria-labelledby="checkbox-group">
              <ButtonLabel>
                <Checkbox type="checkbox" name="checked" value="Light" hidden />
                Light
              </ButtonLabel>

              <ButtonLabel>
                <Checkbox type="checkbox" name="checked" value="Book" hidden />
                Book
              </ButtonLabel>

              <ButtonLabel>
                <Checkbox type="checkbox" name="checked" value="Bold" hidden />
                Bold
              </ButtonLabel>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
