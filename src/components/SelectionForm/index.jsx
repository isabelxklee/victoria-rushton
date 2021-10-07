import React from 'react'
import {Formik, Form} from 'formik'
import {Checkbox} from './styles'

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
              <label>
                <Checkbox type="checkbox" name="checked" value="Light" />
                Light
              </label>

              <label>
                <Checkbox type="checkbox" name="checked" value="Book" />
                Book
              </label>

              <label>
                <Checkbox type="checkbox" name="checked" value="Bold" />
                Bold
              </label>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
