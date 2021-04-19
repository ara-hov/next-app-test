import {useEffect, useState} from 'react'
import UploadImages from "@/ui-kit/upload-images";
import GroupButton from "@/ui-kit/group-button";
import MultipleSelect from "@/ui-kit/multiple-select";
import {layout, labelProps, tailLayout, getOptions} from "@/props/form";
import {getArrayState, getArrayImageInfo} from "@/props/info-state";
import { Form, Modal, Select } from 'antd';
import Router from "next/router";

export default function EventMenuForm({eventId, menu = null, kitchens = null, specialMenu = null, facilities = null,
                                          averagePrices = null}) {

  const [submitting, setSubmitting] = useState(false)

  const [_kitchens, setKitchens] = useState([])
  const [_specialMenu, setSpecialMenu] = useState([])
  const [_facilities, setFacilities] = useState([])
  const [_averagePriceId, setAveragePriceId] = useState('')
  const [_fileListMenu, setFileListMenu] = useState([])
  const [_fileListFullMenu, setFileListFullMenu] = useState([])

  const [form] = Form.useForm();

  useEffect(() => {
    if (menu && menu.kitchens) {
      setKitchens(getArrayState(menu.kitchens, 'kitchenId'))
    }

    if (menu && menu.specialMenu) {
        setSpecialMenu(getArrayState(menu.specialMenu, 'specialMenuId'))
    }

    if (menu && menu.facilities) {
        setFacilities(getArrayState(menu.facilities, 'facilityId'))
    }

    if (menu && menu.averagePriceId) {
        setAveragePriceId(menu.averagePriceId)
        form.setFieldsValue({
            averagePrices: menu.averagePriceId
        })
    }

    if (menu && menu.images) {
        if (menu.images.menu) {
            setFileListMenu(getArrayImageInfo(menu.images.menu))
        }

        if (menu.images.fullmenu) {
            setFileListFullMenu(getArrayImageInfo(menu.images.fullmenu))
        }
    }
  }, [menu])

  const onFinish = async (values: any) => {
    values = {
        kitchens: _kitchens,
        specialMenu: _specialMenu,
        facilities: _facilities,
        averagePriceId: _averagePriceId,
        images: {
          menu: _fileListMenu,
          fullmenu: _fileListFullMenu
        }
    }

    if (menu && menu.id) {
        values.menuId = menu.id
        return await submitHandler('PUT', values)
    }
    return await submitHandler('POST', values);
  };

  const submitHandler = async (method, values: any) => {
    setSubmitting(true)
    try {
      const res = await fetch(`/api/events/${eventId}/menu`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push(`/admin/events/${eventId}/menu`)
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

  const kitchenOptions = getOptions(kitchens);
  const specialMenuOptions = getOptions(specialMenu);
  const facilitiesOptions = getOptions(facilities);
  const averagePricesOptions = getOptions(averagePrices);

  const onChangeKitchens = (value) => {
    setKitchens(value)
  };

  const onChangeSpecialMenu = (value) => {
      setSpecialMenu(value)
  };

  const onChangeFacilities = (value) => {
    setFacilities(value)
  };

  const onChangeAveragePrices = (value) => {
      setAveragePriceId(value)
  };

  const resetFields = () => {
    form.resetFields();
  }

  const saveFileListMenu = (json) => {
      setFileListMenu([..._fileListMenu, json])
  }

  const saveFileListFullMenu = (json) => {
      setFileListFullMenu([..._fileListFullMenu, json])
  }

  const removeFileListMenu = (name) => {
      setFileListMenu(_fileListMenu.filter(item => item.uid !== name));
  }

  const removeFileListFullMenu = (name) => {
    setFileListFullMenu(_fileListFullMenu.filter(item => item.uid !== name));
  }

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item>
           <h3>Menu</h3>
        </Form.Item>
        <Form.Item {...labelProps}
            label="Kitchen"
            name="kitchens">
            <MultipleSelect optionList={kitchenOptions} placeholder={"Kitchen"} onChangeParent={onChangeKitchens}
                            defaultValue={_kitchens}/>
        </Form.Item>

        <Form.Item  {...labelProps}
            label="Special menu"
            name="specialMenu">
            <MultipleSelect optionList={specialMenuOptions} placeholder={"Special menu"} defaultValue={_specialMenu}
                            onChangeParent={onChangeSpecialMenu} />
        </Form.Item>

        <Form.Item  {...labelProps}
            label="Facilities"
            name="facilities">
            <MultipleSelect optionList={facilitiesOptions} placeholder={"Facilities"} defaultValue={_facilities}
                            onChangeParent={onChangeFacilities} />
        </Form.Item>

      <Form.Item  {...labelProps}
        label="Average Prices"
        name="averagePrices">
          <Select
              style={{ width: '50%' }} options={averagePricesOptions} onChange={onChangeAveragePrices}/>
      </Form.Item>

      <Form.Item  {...labelProps} label="Menu">
           <UploadImages
                fileLists={_fileListMenu}
                action={saveFileListMenu}
                key="image-menu"
                removeAction={removeFileListMenu}
            />

      </Form.Item>

      <Form.Item  {...labelProps} label="Full Menu">
                <UploadImages
                    fileLists={_fileListFullMenu}
                    key="image-fullmenu"
                    action={saveFileListFullMenu}
                    removeAction={removeFileListFullMenu}
                />
      </Form.Item>

      <hr className="form-hr"/>
      <Form.Item {...tailLayout}>
        <GroupButton onReset={resetFields} onPreview={onPreview} onCancel={onCancel} submitting={submitting}/>
      </Form.Item>
    </Form>
  )
}
