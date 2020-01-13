import { ColumnProps } from 'antd/lib/table'
import React, { Dispatch, SetStateAction } from 'react'
import {ICvData} from "../../store/cvs/cvs"
import {Button} from "antd"

export function prepareColumns({
  openRemoveModal,
  setActiveCvId,
  setEditModalVisibility,
}: {
  openRemoveModal: () => void
  setEditModalVisibility: Dispatch<SetStateAction<boolean>>
  setActiveCvId: Dispatch<SetStateAction<number>>
}) {
  function edit(id: number) {
    setActiveCvId(id)
    setEditModalVisibility(true)
  }

  function confirmRemove(id: number) {
    setActiveCvId(id)
    openRemoveModal()
  }
  const columns: Array<ColumnProps<ICvData>> = [
    {
      dataIndex: 'id',
      title: 'Id',
    },
    {
      dataIndex: 'name',
      title: 'name',
    },
    {
      dataIndex: 'text',
      title: 'text',
    },
    {
      dataIndex: 'actions',
      align: 'right',
      title: 'Actions',
      render: (value, row) => (
        <div>
          <Button onClick={() => edit(row.id)}>
            Edit
          </Button>
          <Button onClick={() => confirmRemove(row.id)}>
            Delete
          </Button>
        </div>
      ),
    }
  ]
  return columns
}
