import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {useStoreActions} from "../../store/hooks"
import {FormComponentProps} from "antd/es/form"


const Registration: React.FC<FormComponentProps> = props => {
    const createUser = useStoreActions(actions => actions.users.createUser)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFields((err: string, values) => {
            if (!err) {
                createUser(values)
            }
        })
    }
    return (
      <div>
          <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
              </Form.Item>
              <Form.Item>
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
              </Form.Item>
          </Form>
          );
      </div>
    )
}

export default Form.create()(Registration)
