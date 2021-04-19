import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Row, Col, Rate } from "antd";
import Icon, { UserOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../../styles/submitForm.module.css";
import Star from "@/icons/star.svg";

const { TextArea } = Input;

const SubmitForm = ({ isRestaurantPage, isSinglePlacePage }: any) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <div className={styles.form_container}>
      <div className={styles.write_wrapper}>
        <span className={styles.write_text}>Write a review</span>
      </div>
      <div className={styles.rate_wrapper}>
        {isSinglePlacePage ? (
          <div className={styles.rate_block}>
            <span className={styles.rate_category}>Your mark</span>
            <Rate
              disabled
              defaultValue={4}
              character={<Icon component={Star} />}
            />
          </div>
        ) : (
          <>
            <div className={styles.rate_block}>
              <span className={styles.rate_category}>Кухня</span>
              <Rate
                disabled
                defaultValue={4}
                character={<Icon component={Star} />}
              />
            </div>
            <div className={styles.rate_block}>
              <span className={styles.rate_category}>Обслуживание</span>
              <Rate
                disabled
                defaultValue={4}
                character={<Icon component={Star} />}
              />
            </div>
            <div className={styles.rate_block}>
              <span className={styles.rate_category}>Цена/качество</span>
              <Rate
                disabled
                defaultValue={4}
                character={<Icon component={Star} />}
              />
            </div>
          </>
        )}
      </div>
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <Row gutter={[24, 0]}>
          <Col span={isRestaurantPage ? 12 : 8}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                addonBefore={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="username_input"
              />
            </Form.Item>
          </Col>
          <Col
            span={isRestaurantPage ? 12 : 8}
            className={isRestaurantPage ? "p_right_12" : "p_right"}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                addonBefore={<MailOutlined className="site-form-item-icon" />}
                type="text"
                placeholder="E-mail"
                className="email_input"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={isRestaurantPage ? 24 : 16}>
            <Form.Item
              name="massage"
              rules={[{ required: true, message: "Please type text!" }]}
            >
              <TextArea
                placeholder="Your massage"
                autoSize={{ minRows: 10, maxRows: 14 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              danger
              htmlType="submit"
              className="send_btn"
            >
              Send
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubmitForm;
