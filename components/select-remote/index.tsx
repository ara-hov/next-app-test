// import { usePlaces } from '@/lib/swr-hooks'

import {Select, Form} from 'antd'
const { Option } = Select

export default function SelectRemote({ data, isLoading, name, defaultValue, style, placeholder, onChange }) {
  // const { data, isLoading } = usePlaces()

  if (isLoading) {
    return (
      <Select
        style={style}
        placeholder={placeholder}
        onChange={onChange}
      >
      </Select>
    )
  }

  return (
    <Form.Item initialValue={String(defaultValue)}>
      <Select
        defaultValue={String(defaultValue)}
        style={style}
        placeholder={placeholder}
        value={String(defaultValue)}
        onChange={onChange}
      >
        { data.items.map(region => (<Option value={String(region.id)} key={Math.random().toString(36).substr(2, 9)}>{region.name}</Option>)) }
      </Select>
    </Form.Item>
  )
}
