import { useMemo, useReducer } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  createColumnHelper,
} from '@tanstack/react-table'

import * as st from './styles.css'
import { cs } from '~/utils'
import PlayerInfo from '~/ui/molecule/playerInfo'

type Podcast = {
  id: string
  trackNumber: number
  title: string
  author: string
  description: string
  releasedAt: Date
  img: {
    src: string
    alt: string
  }
}

export type Data = {
  podcasts: Array<Podcast>
}

export type Props = {
  data: Data
  className?: string
}

const helper = createColumnHelper<Podcast>()

const columns = [
  helper.accessor('trackNumber', {
    header: '',
  }),
  helper.accessor('author', {
    header: 'Name',
    cell: (info) => (
      <PlayerInfo
        className={st.infoRow}
        data={{
          title: 'asdsd',
          author: 'lkjl',
          img: {
            src: 'dsj',
            alt: ','
          }
        }}
      />
    ),
  }),
  helper.accessor('description', {
    header: 'Description',
  }),
  helper.accessor('releasedAt', {
    header: 'Released',
  }),
]

function Podcasts({ data: d, ...p }: Props) {
  const table = useReactTable({
    data: d.podcasts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className={cs(st.container, p.className)}>
      <thead>
        <tr>
          {table.getFlatHeaders().map((h) => (
            <th key={h.id}>
              {flexRender(h.column.columnDef.header, h.getContext())}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table.getRowModel().rows.map((r) => (
          <tr key={r.id}>
            {r.getVisibleCells().map((c) => (
              <td key={c.id}>
                {flexRender(c.column.columnDef.cell, c.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Podcasts;
