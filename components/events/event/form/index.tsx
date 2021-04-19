import { useState, useEffect } from 'react'
import { useEvent, useRegions, usePlaces } from '@/lib/swr-hooks'
import Router, { useRouter } from 'next/router'

import moment from 'moment'
// import 'moment/locale/zh-cn'
// import locale from 'antd/lib/locale/zh_CN'

import {
  Input,
  Select,
  Button,
  Form,
  Modal,
  DatePicker,
  // Space
} from 'antd'

const { Option } = Select
const { RangePicker } = DatePicker

import {labelProps, layout, tailLayout} from "@/props/form";
import GroupButton from "@/ui-kit/group-button";
import SelectRemote from '@/components/select-remote'

export default function EventForm() {
  const [_author, setAuthor] = useState('')
  const [_eventName, setEventName] = useState('')
  const [_address, setAddress] = useState('')
  const [_regionId, setRegionId] = useState('')
  const [_workingTimeFrom, setWorkingTimeFrom] = useState('')
  const [_workingTimeTo, setWorkingTimeTo] = useState('')
  const [_phone, setPhone] = useState('')
  const [_facebookLink, setFacebookLink] = useState('')
  const [_instagramLink, setInstagramLink] = useState('')
  const [_siteName, setSiteName] = useState('')
  const [_placeId, setPlaceId] = useState('')
  const [_placeName, setPlaceName] = useState('')
  const [_mapLink, setMapLink] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const { data: regions, isLoading: isLoadingRegions } = useRegions()
  // const { data: places, isLoading: isLoadingPlaces } = usePlaces()

  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useEvent(String(id))
  let event
  if (!data) {
    // Значения по умолчанию, пока не будут загружены реальные данные
    event = {
      author: '',
      eventName: '',
      address: '',
      regionId: null,
      workingTimeFrom: null,
      workingTimeTo: null,
      phone: '',
      facebookLink: '',
      instagramLink: '',
      siteName: '',
      mapLink: '',
    }
  } else {
    event = data
  }

  const {
    author,
    eventName,
    address,
    regionId,
    workingTimeFrom,
    workingTimeTo,
    phone,
    facebookLink,
    instagramLink,
    siteName,
    placeId,
    placeName,
    mapLink,
  } = event

  useEffect(() => {
    if (typeof author === 'string') {
      setAuthor(author)
    }
    if (typeof eventName === 'string') {
      setEventName(eventName)
    }
    if (typeof address === 'string') {
      setAddress(address)
    }
    if (typeof regionId === 'string' || typeof regionId === 'number') {
      setRegionId(String(regionId))
    }
    if (typeof workingTimeFrom === 'string') {
      setWorkingTimeFrom(workingTimeFrom)
    }
    if (typeof workingTimeTo === 'string') {
      setWorkingTimeTo(workingTimeTo)
    }
     if (typeof phone === 'string') {
      setPhone(phone)
    }
    if (typeof facebookLink === 'string') {
      setFacebookLink(facebookLink)
    }
    if (typeof instagramLink === 'string') {
      setInstagramLink(instagramLink)
    }
    if (typeof siteName === 'string') {
      setSiteName(siteName)
    }
    if (typeof placeId === 'string' || typeof placeId === 'number') {
      setPlaceId(String(placeId))
    }
    if (typeof placeName === 'string') {
      setPlaceName(placeName)
    }
    if (typeof mapLink === 'string') {
      setMapLink(mapLink)
    }
  }, [
    author,
    eventName,
    address,
    regionId,
    workingTimeFrom,
    workingTimeTo,
    phone,
    facebookLink,
    instagramLink,
    siteName,
    placeId,
    placeName,
    mapLink,
  ])

  // от 1 до 24 часов
  // const hours = [...Array(25).keys()].slice(1)
  // const days = [...Array(32).keys()].slice(1) // FIXME: заменить на календарь

  const [form] = Form.useForm();

  const submitHandlerEdit = async (values: any) => {
    setSubmitting(true)
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: _author,
          eventName: _eventName,
          address: _address,
          regionId: _regionId,
          workingTimeFrom: _workingTimeFrom,
          workingTimeTo: _workingTimeTo,
          phone: _phone,
          facebookLink: _facebookLink,
          instagramLink: _instagramLink,
          siteName: _siteName,
          // placeId: _placeId,
          // placeName: _placeName,
          mapLink: _mapLink,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push(`/admin/events/${id}`)
    } catch (exception) {
      Modal.error({
        title: 'Error',
        content: exception.message,
      })
    }
  }

  const submitHandlerNew = async (values: any) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: _author,
          eventName: _eventName,
          address: _address,
          regionId: _regionId,
          workingTimeFrom: _workingTimeFrom,
          workingTimeTo: _workingTimeTo,
          phone: _phone,
          facebookLink: _facebookLink,
          instagramLink: _instagramLink,
          siteName: _siteName,
          // placeId: _placeId,
          // placeName: _placeName,
          mapLink: _mapLink,
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push(`/admin/events/${json.id}`)
    } catch (exception) {
      Modal.error({
        title: 'Error',
        content: exception.message,
      })
    }
  }

  const submitHandler = async (values: any) => {
    if (id) {
      return await submitHandlerEdit(values)
    }
    return await submitHandlerNew(values)
  }

  const resetFields = () => {
    console.log('fdfdf')
  }

  const onCancel = () => {
    console.log('cancel')
  };

  const onPreview = () => {
    console.log('preview')
  };

  const setWorkingTime = (dates, dateStrings) => {
    setWorkingTimeFrom(dateStrings[0])
    setWorkingTimeTo(dateStrings[1])
  }

  // TODO: показать некоторое подобие итоговой формы,
  // т.е. её очертания без предварителньно загруженных данных
  if (id && isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Form {...layout} name="control-hooks" onFinish={submitHandler}>
      <Form.Item>
        <h3>Event info</h3>
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Author">
        <Input
            id="author"
            type="text"
            name="author"
            value={_author}
            onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Event name">
        <Input
            id="eventName"
            type="text"
            name="eventName"
            value={_eventName}
            onChange={(e) => setEventName(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Sitename">
        <Input
            id="siteName"
            type="text"
            name="siteName"
            value={_siteName}
            onChange={(e) => setSiteName(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Facebook link">
        <Input
            id="facebookLink"
            type="text"
            name="facebookLink"
            value={_facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Instagram link">
        <Input
            id="instagramLink"
            type="text"
            name="instagramLink"
            value={_instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Phone">
        <Input
            id="phone"
            type="text"
            name="phone"
            value={_phone}
            onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Date / Time">
        <RangePicker
          showTime
          name="dateTime"
          style={{width: '100%'}}
          value={(_workingTimeFrom && _workingTimeTo) ? [moment(_workingTimeFrom), moment(_workingTimeTo)] : null}
          onChange={setWorkingTime}
        />
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Region">
        <SelectRemote
          data={regions}
          isLoading={isLoadingRegions || isLoading}
          name="regionId"
          defaultValue={_regionId}
          style={{ width: '100%' }}
          placeholder="Select a country / region"
          onChange={value => setRegionId(value)}
        ></SelectRemote>
      </Form.Item>

      <Form.Item  {...labelProps}
                  label="Address">
        <Input
            id="address"
            type="text"
            name="address"
            value={_address}
            onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Item>

      {/* <Form.Item  {...labelProps}
                  label="Address link">
        <Input
            id="addressLink"
            type="text"
            name="addressLink"
            value={_addressLink}
            onChange={(e) => setAddressLink(e.target.value)}
        />
      </Form.Item> */}

      <Form.Item  {...labelProps}
                  label="Map link">
        <Input
            id="mapLink"
            type="text"
            name="mapLink"
            value={_mapLink}
            onChange={(e) => setMapLink(e.target.value)}
        />
      </Form.Item>

      <hr className="form-hr"/>
      <Form.Item {...tailLayout}>
        <GroupButton onReset={resetFields} onPreview={onPreview} onCancel={onCancel} submitting={submitting}/>
      </Form.Item>

    </Form>
  )
}
