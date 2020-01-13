import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from '../../store/hooks'

import { prepareColumns } from './columns'
import {ICvData} from "../../store/cvs/cvs"
import {Button, Modal, Table} from "antd"
import EditModal from "./EditModal/EditModal"

const Cvs = () => {
  const [isEditModalVisible, setEditModalVisibility] = useState<boolean>(false)
  const [isRemoveModalVisible, setRemoveModalVisibility] = useState<boolean>(
    false,
  )
  const [activeCvId, setActiveCvId] = useState<number>(Number.NaN)
  const cvs = useStoreState(state => state.cvs.cvs)
  const history = useHistory()
  const isLogged = useStoreState(state => state.users.isLogged)
  const updatecv = useStoreActions(actions => actions.cvs.updateCv)
  const createcv = useStoreActions(actions => actions.cvs.createCv)
  const deletecvs = useStoreActions(actions => actions.cvs.deleteCv)

  useEffect(() => {
    if(!isLogged) {
      //history.push('/login')
    }
  }, [isLogged])

  function openEditModal() {
    setEditModalVisibility(true)
  }

  function closeEditModal() {
    setEditModalVisibility(false)
    setActiveCvId(Number.NaN)
  }

  function openRemoveModal() {
    setRemoveModalVisibility(true)
  }

  function closeRemoveModal() {
    setRemoveModalVisibility(false)
    setActiveCvId(Number.NaN)
  }

  function saveForm(data: ICvData) {
    if (activeCvId) {
      updatecv({ data, id: activeCvId })
    } else {
      createcv(data)
    }
    closeEditModal()
  }
  function removeItem() {
    if (activeCvId) {
      deletecvs(activeCvId)
    }
    closeRemoveModal()
  }

  const cv = cvs.get(activeCvId)

  console.log(cvs.valueSeq().toArray())

  return (
    <div>
      <div>
        <Button onClick={openEditModal}>
          New cv
        </Button>
      </div>
      <Table
        rowKey="id"
        columns={prepareColumns({
          openRemoveModal,
          setEditModalVisibility,
          setActiveCvId,
        })}
        dataSource={cvs.valueSeq().toArray()}
      />
      {isEditModalVisible && (
        <EditModal
          data={cv}
          visible={isEditModalVisible}
          onClose={closeEditModal}
          onOK={saveForm}
        />
      )}
      {isRemoveModalVisible && (
        <Modal
          visible={isRemoveModalVisible}
          onCancel={closeRemoveModal}
          onOk={removeItem}
        />
      )}
    </div>
  )
}

export default Cvs
