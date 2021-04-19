import { useState, useEffect } from 'react'
import UploadImages from "@/ui-kit/upload-images";
import GroupButton from "@/ui-kit/group-button";
import MultipleSelect from "@/ui-kit/multiple-select";
import {layout, labelProps, tailLayout, getOptions} from "@/props/form"
import { Form, Modal, Input, Space } from 'antd';
import Router from "next/router";
import {getArrayImageInfo} from "@/props/info-state";

const { TextArea } = Input;

export default function EventContentForm({ eventId, data }) {
  const [_videoOverviewLink, setVideoOverviewLink] = useState('')
  // const [_tours, setTours] = useState([]) // TODO: 360 туры это загруженные файлы с 3д сценой комнаты
  const [_360tourLink, set360tourLink] = useState('')
  const [_about, setAbout] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [_eventPictures, setEventPictures] = useState([])
  const [_videoOverview, setVideoOverview] = useState([])
  const [_logo, setLogo] = useState([])

  const [form] = Form.useForm();

  let content;
  if (!data) {
    content = {
      videoOverviewLink: '',
      tourLink: '',
      about: '',
      media: [],
    }
  } else {
    content = data
  }
  const {
    videoOverviewLink,
    tourLink,
    about,
    media
  } = content

  useEffect(() => {
    if (typeof videoOverviewLink === 'string') {
      setVideoOverviewLink(videoOverviewLink)
    }
    // if (typeof tours === 'array') {
    //   setTours(tours)
    // }
    if (typeof tourLink === 'string') {
      set360tourLink(tourLink)
    }
    if (typeof about === 'string') {
      setAbout(about)
    }

    if (media) {
        if (media.eventPictures) {
            setEventPictures(getArrayImageInfo(media.eventPictures))
        }

        if (media.videoOverview) {
            setVideoOverview(getArrayImageInfo(media.videoOverview))
        }

        if (media.logo) {
            setLogo(getArrayImageInfo(media.logo))
        }
      }
  }, [
    videoOverviewLink,
    tourLink,
    about,
    media
  ])
  
  const onFinish = async (values: any) => {
    values = {
      videoOverviewLink: _videoOverviewLink,
      // tours: _tours,
      tourLink: _360tourLink,
      about: _about,
      media: {
        eventPictures: _eventPictures,
        videoOverview: _videoOverview,
        logo: _logo
      }
    }

    if (content && content.id) {
        values.contentId = content.id
        return await submitHandler('PUT', values)
    }
    return await submitHandler('POST', values);
  };

  const submitHandler = async (method, values: any) => {
    setSubmitting(true)
    try {
      const res = await fetch(`/api/events/${eventId}/content`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push(`/admin/events/${eventId}/content`)
    } catch (exception) {
        Modal.error({
          title: 'Error',
          content: exception.message,
        })
    }
  }

  const onCancel = () => {
    console.log('cancel')
  };

  const onPreview = () => {
      console.log('preview')
  };

  const resetFields = () => {
      form.resetFields();
  }

  // const toursOptions = getOptions(tours);

  const onChangeTour = (value) => {
    console.log(value)
  };

    const removeFile = (name) => {
        console.log('remove')
    }

  const saveEventPictures = (json) => {
      setEventPictures([..._eventPictures, json])
  }

  const removeEventPictures = (name) => {
      setEventPictures(_eventPictures.filter(item => item.uid !== name));
  }

  const saveVideoOverview = (json) => {
      setVideoOverview([..._videoOverview, json])
  }

  const removeVideoOverview = (name) => {
      setVideoOverview(_videoOverview.filter(item => item.uid !== name));
  }

  const saveLogo = (json) => {
      setLogo([..._logo, json])
  }

  const removeLogo = (name) => {
    setLogo(_logo.filter(item => item.uid !== name));
  }

  return (
    <Form {...layout} name="control-hooks" form={form} onFinish={onFinish}>
        <Form.Item>
           <h3>Content</h3>
        </Form.Item>

        <Form.Item  {...labelProps} label="Event pictures">
            <UploadImages
                fileLists={_eventPictures}
                action={saveEventPictures}
                key="image-event-pictures"
                removeAction={removeEventPictures}
            />
        </Form.Item>

        <Form.Item  {...labelProps} label="Video overview">
            <UploadImages
                fileLists={_videoOverview}
                action={saveVideoOverview}
                key="image-video-overview"
                removeAction={removeVideoOverview}
            />
        </Form.Item>

        <Form.Item  {...labelProps}
            label="Video overview link">
            <Input
                id="videoOverviewLink"
                type="text"
                name="videoOverviewLink"
                value={_videoOverviewLink}
                onChange={(e) => setVideoOverviewLink(e.target.value)}
            />
        </Form.Item>

        {/* <Form.Item  {...labelProps}
            label="360 Tour"
            name="360tour">
            <MultipleSelect
              optionList={tours}
              placeholder={"Select tour"}
              onChangeParent={onChangeTour}
              defaultValue={_tours}
            />
        </Form.Item> */}

        <Form.Item  {...labelProps}
            label="Add 360 tour link">
            <Input
                id="tourLink"
                type="text"
                name="tourLink"
                value={_360tourLink}
                onChange={(e) => set360tourLink(e.target.value)}
            />
        </Form.Item>

        <Form.Item  {...labelProps} label="Event logo">
            <UploadImages
                fileLists={_logo}
                action={saveLogo}
                key="content-logo"
                isRoundStyle={true}
                removeAction={removeLogo}
            />
        </Form.Item>

        <Form.Item  {...labelProps}
            label="About event">
            <TextArea rows={6}
              name="about"
              value={_about}
              onChange={(e) => setAbout(e.target.value)}
            />
        </Form.Item>

        <hr className="form-hr"/>
        <Form.Item {...tailLayout}>
            <GroupButton onReset={resetFields} onPreview={onPreview} onCancel={onCancel} submitting={submitting}/>
        </Form.Item>
    </Form>
  )
}
