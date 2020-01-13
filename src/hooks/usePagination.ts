import {useEffect, useState} from "react"

interface IPagination {
  items: any[]
  itemsPerPage: number
}

export function usePagination({items, itemsPerPage}: IPagination) {
  const [pageItems, setPageItems] = useState<any>([])
  const [page, setPage] = useState<number>(1)
  const [itemsCount, setItemsCount] = useState<number>(0)

  useEffect(() => {
    console.log(items, page, itemsPerPage, items.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage))
    setPageItems(items.slice(page * itemsPerPage, itemsPerPage))
  }, [page, items, itemsPerPage])

  useEffect(() => {
    setItemsCount(items.length)
  }, [items])

  return {
    pageItems,
    setPage,
    page,
    itemsPerPage,
    itemsCount
  }
}
