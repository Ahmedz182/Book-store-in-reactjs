import React, { useState } from "react";
import { Button, Modal, InputNumber, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const CommentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-col py-3 w-1/3 me-2 gap-3 sm:px-4 ">
          <p className="text-l font-bold items-center">
            <span className="text-green font-black pe-1">4.3</span>Rating based
            on
            <span className="text-green px-1 font-black">1624</span>reviews
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-sembold">Share your thoughts</p>
            <p>
              If you’ve used this product, share your thoughts with other
              customers
            </p>
            <button
              onClick={showModal}
              className="button border p-2 px-10 w-max hover:bg-green transform duration-300 ease hover:text-white">
              Write a review
            </button>
          </div>
        </div>
        <span className="h-32 bg-title-text/20 w-[1px]  "></span>
        <div className="flex flex-col px-10 gap-2">
          <p className="font-bold">Latest Review</p>
          <p className="font-semibold">Emily Selman</p>
          <p className="text-green font-black pe-1">4.3</p>
          <p className="w-2/3">
            This is the bag of my dreams. I took it on my last vacation and was
            able to fit an absurd amount of snacks for the many long and hungry
            flights.
          </p>
        </div>
      </div>
      <Modal
        title="Write Review"
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Review"
            name="review"
            rules={[
              {
                required: true,
                message: "Please input your Review!",
              },
            ]}>
            <TextArea />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              {
                required: true,
                message: "Please input your Rating 1-5!",
              },
            ]}>
            <InputNumber min={1} max={5} defaultValue={5} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="bg-green" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CommentSection;
