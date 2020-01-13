import React from 'react'
import { Buttons, FormBox } from './styled'
import {Button, Input, Modal} from "antd"
import {ICvData} from "../../../store/cvs/cvs"
import useForm from "react-hook-form"

interface IProps {
  onOK: (data: ICvData) => void
  onClose: () => void
  data: ICvData | undefined
  visible: boolean
}

const EditModal: React.FC<IProps> = ({ onOK, onClose, data, ...props }) => {
  const { register, handleSubmit, errors } = useForm<any>({
    defaultValues: data
  })

  function submit(validatedData: ICvData) {
    console.log(validatedData)
    onOK(validatedData)
  }

  return (
    <Modal visible={props.visible}>
      <div onClick={onClose}>
        Back
      </div>
      <h1>
        Edit Cv
      </h1>
      <FormBox noValidate={true}>
        <div>
          <div>
            Name:
          </div>
          <Input
            name="name"
            ref={register}
          />
          <div>{errors.name && errors.name.message}</div>
        </div>
        <div>
          <div>
            Text
          </div>
          <Input
            name="text"
            ref={register}
          />
          <div>{errors.type && errors.type.message}</div>
        </div>
        <Buttons>
          <Button onClick={onClose} className="cancel">
            Cancel
          </Button>
          <Button onClick={handleSubmit(submit)} data-test="save-button">
            Save
          </Button>
        </Buttons>
      </FormBox>
    </Modal>
  )
}

export default EditModal
