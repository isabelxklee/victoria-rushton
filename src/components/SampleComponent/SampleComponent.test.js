import React from 'react'
import renderer from 'react-test-renderer'
import SampleComponent from './index.jsx'

describe('SampleComponent', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<SampleComponent>helllo worlddd</SampleComponent>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
