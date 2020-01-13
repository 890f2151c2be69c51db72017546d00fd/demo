import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {useStoreActions} from "../../store/hooks"
import {FormComponentProps} from "antd/es/form"
import {REGISTRATION} from "../../routes/routes"
import {Link} from "react-router-dom"


const Login: React.FC<FormComponentProps> = props => {
    const login = useStoreActions(actions => actions.users.login)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFields((err: string, values) => {
          if (!err) {
            login(values)
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
                <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <Link to={REGISTRATION}>register now!</Link>
                </Form.Item>
                </Form>
                );
            </div>
    )
}

export default Form.create()(Login)
