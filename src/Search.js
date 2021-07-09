import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => {
  return(
    <Form>
    <Form.Field>
      <label>Pesquisa</label>
      <input placeholder='Digite o nome do usuário' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default FormExampleForm