import React from 'react'
import {Formik, Field, Form} from 'formik'
import {Button} from '../../styles'

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
              <Button type="submit">
                <label>
                  <Field type="checkbox" name="checked" value="Light" hidden />
                  Light
                </label>
              </Button>
              <Button type="submit">
                <label>
                  <Field type="checkbox" name="checked" value="Book" hidden />
                  Book
                </label>
              </Button>
              <Button type="submit">
                <label>
                  <Field type="checkbox" name="checked" value="Regular" hidden />
                  Regular
                </label>
              </Button>
              <Button type="submit">
                <label>
                  <Field type="checkbox" name="checked" value="Bold" hidden />
                  Bold
                </label>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
