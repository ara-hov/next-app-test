import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { DatePicker, Select } from 'antd';
import ShareableCollapse from '@/components/reusable-components/collapse/ShareableCollapse';
import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import PhoneInput from 'react-phone-input-2';
import ShareableSelect from './../../reusable-components/select/ShareableSelect';
import ShareableButton from '@/components/reusable-components/button/ShareableButton';
import ShareableModal from '@/components/reusable-components/modal/ShareableModal';
import CountryPopup from './country-popup/CountryPopup';
import moment from 'moment';
import ShareableMultiSelect from '@/components/reusable-components/multi-select/ShareableMultiSelect';
import 'react-phone-input-2/lib/style.css';
import MapPopup from './map-popup/MapPopup';

interface Addresses {
  id: number;
  name?: string;
}

const EventInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isMapModalVisible, setIsMapModalVisible] = useState<boolean>(false);
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const addresses = [
    {
      id: 1,
      name: 'Address 1'
    },
    {
      id: 2,
      name: 'Address 2'
    },
    {
      id: 3,
      name: 'Address 3'
    },
    {
      id: 4,
      name: 'Address 4'
    },
    {
      id: 5,
      name: 'Address 5'
    }
  ];
  const mapAddresses = [
    {
      id: 1,
      name: 'https://goo.gl/maps/962uABEMZtvGhMVa7'
    },
    {
      id: 2,
      name: 'https://goo.gl/maps/962uABEMZtvGhMVa7ss'
    },
    {
      id: 3,
      name: 'https://goo.gl/maps/962uABEMZtvGhMVa7www'
    }
  ];

  const sampleData = ['China', 'Russia', 'Armenia', 'USA', 'Canada', 'Iceland'];

  const formik = useFormik({
    initialValues: {
      event_name: '',
      phone: '',
      address: '',
      map_address: ''
    },
    validationSchema: Yup.object({
      event_name: Yup.string()
        .min(2, 'Minimum 2 characters')
        .required('The field can not be blank!'),
      address: Yup.string().required('The field can not be blank!'),
      map_address: Yup.string().required('The field can not be blank!'),
      phone: Yup.string().required('The field can not be blank!')
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleOk = () => {
    setIsModalVisible(false);
    setIsMapModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsMapModalVisible(false);
  };

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56]
    };
  }

  const handleAddressChange = (option?: string) => {
    formik.setFieldValue('address', option);
    setIsModalVisible(!isModalVisible);
  };
  const handleMapAddressChange = (option?: string) => {
    formik.setFieldValue('map_address', option);
    setIsMapModalVisible(!isMapModalVisible);
  };

  const handleSubmit = (values: any) => {
    formik.resetForm(values);
    console.log(values);
  };

  return (
    <>
      <div className="eventInfo__container">
        <ShareableCollapse
          header="Event info"
          className="eventInfo__container__collapse"
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="eventInfo__container__inputs">
              <ShareableInput
                size="large"
                name="author"
                label="Author"
                onChange={formik.handleChange}
              />
            </div>
            <div className="eventInfo__container__inputs">
              <ShareableInput
                size="large"
                name="event_name"
                label="Event name"
                onChange={formik.handleChange}
              />
              {formik.errors.event_name && formik.touched.event_name && (
                <span className="eventInfo__container__inputs--validate">
                  {formik.errors.event_name}
                </span>
              )}
            </div>
            <div className="eventInfo__container__inputs">
              <ShareableInput
                size="large"
                name="sitename"
                label="Sitename"
                onChange={formik.handleChange}
              />
            </div>
            <div className="eventInfo__container__inputs">
              <ShareableInput
                size="large"
                name="facebook_link"
                label="Facebook link"
                onChange={formik.handleChange}
              />
            </div>
            <div className="eventInfo__container__inputs">
              <ShareableInput
                size="large"
                name="instagram_link"
                label="Instagram link"
                onChange={formik.handleChange}
              />
            </div>
            <div className="eventInfo__container__inputs">
              <p>Phone</p>
              <PhoneInput
                // inputProps={{
                //   name: 'phone'
                // }}
                country={'us'}
                value=""
                onChange={formik.handleChange}
              />
            </div>
            <div className="eventInfo__container__inputs">
              <p>Date / Time</p>
              <RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                showTime={{
                  hideDisabledOptions: true,
                  defaultValue: [
                    moment('00:00:00', 'HH:mm:ss'),
                    moment('11:59:59', 'HH:mm:ss')
                  ]
                }}
                format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
            <div className="eventInfo__container__inputs">
              <p>Address</p>
              <ShareableSelect
                name="address"
                className="eventInfo__container__inputs__shareableSelect"
                onChange={(option) => {
                  handleAddressChange(option);
                }}
              >
                {addresses.map((address: Addresses) => {
                  return (
                    <Option key={address.id} value={address.name}>
                      {address.name}
                    </Option>
                  );
                })}
              </ShareableSelect>
              {formik.errors.address && formik.touched.address && (
                <span className="eventInfo__container__inputs--validate">
                  {formik.errors.address}
                </span>
              )}
            </div>
            <div className="eventInfo__container__inputs">
              <p>Location</p>
              <ShareableMultiSelect countries={sampleData} />
            </div>
            <div className="eventInfo__container__inputs">
              <p>Address</p>
              <ShareableSelect
                className="eventInfo__container__inputs__shareableSelect"
                name="map_address"
                onChange={(option) => {
                  handleMapAddressChange(option);
                }}
              >
                {mapAddresses.map((mapAddress: Addresses) => {
                  return (
                    <Option key={mapAddress.id} value={mapAddress.name}>
                      {mapAddress.name}
                    </Option>
                  );
                })}
              </ShareableSelect>
              {formik.errors.map_address && formik.touched.map_address && (
                <span className="eventInfo__container__inputs--validate">
                  {formik.errors.map_address}
                </span>
              )}
            </div>
            <div className="eventInfo__container__buttons">
              <ShareableButton
                buttonText="Delete all"
                danger={true}
              ></ShareableButton>
              <ShareableButton buttonText="Preview"></ShareableButton>
              <ShareableButton
                buttonText="Cancel"
                disabled={true}
              ></ShareableButton>
              <ShareableButton
                buttonText="Save"
                onClick={formik.handleSubmit}
              ></ShareableButton>
            </div>
          </form>
        </ShareableCollapse>
      </div>
      <ShareableModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        footer={
          <ShareableButton
            buttonText="Save"
            onClick={() => setIsModalVisible(!isModalVisible)}
          ></ShareableButton>
        }
      >
        <CountryPopup />
      </ShareableModal>

      <ShareableModal
        isModalVisible={isMapModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        width={279}
        title="Address link"
        footer={
          <ShareableButton
            buttonText="Save"
            onClick={() => setIsMapModalVisible(!isMapModalVisible)}
          ></ShareableButton>
        }
      >
        <MapPopup />
      </ShareableModal>
    </>
  );
};

export default EventInfo;
