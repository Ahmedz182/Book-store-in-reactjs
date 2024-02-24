import React, { useState } from "react";
import { Button, Modal, InputNumber, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import reviewData from "../assets/json/review";
const CommentSection = ({ id }) => {
  const currentbook = reviewData.filter((review) => review.bookid === id);

  const length = currentbook.length;
  const toatlRating = currentbook
    .filter((item) => item.rating)
    .reduce((acc, cur) => acc + cur.rating, 0);
  let avgRating = Math.round((toatlRating / length) * 10) / 10;

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
    console.log(id + " " + window.location.pathname);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center sm:flex-col">
        <div className="flex flex-col py-3 w-1/3 me-2 gap-3 sm:px-4 sm:w-full">
          <p className="text-l font-bold items-center">
            {avgRating ? (
              <>
                <span className="text-green font-black pe-1">
                  {" "}
                  {avgRating}/5{" "}
                </span>{" "}
                Rating based on{" "}
                <span className="text-green font-black pe-1">{length}</span>{" "}
                Reviews`
              </>
            ) : (
              "No Reviews Yet"
            )}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-sembold">Share your thoughts</p>
            <p>
              If you’ve used this product, share your thoughts with other
              customers
            </p>
            <button
              onClick={showModal}
              className="button border rounded p-2 px-10 w-max hover:bg-green transform duration-300 ease hover:text-white">
              Write a review
            </button>
          </div>
        </div>
        <span className="h-32 bg-title-text/20 w-[1px]  sm:hidden"></span>
        <div className="flex flex-col px-10 gap-2 w-2/3 sm:w-full sm:px-4">
          <p className="font-bold">Latest Review</p>

          {currentbook.length > 0 ? (
            <>
              <p className="font-semibold">{currentbook[length - 1].name}</p>
              <p className="text-green font-black pe-1">
                {currentbook[length - 1].rating}
              </p>
              <p className="commentText">{currentbook[length - 1].comment}</p>
            </>
          ) : (
            "No Reviews Yet"
          )}
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
          size="large"
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
            label="Rating Star 1 - 5"
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
            <Button
              type="primary"
              className="bg-green"
              htmlType="submit"
              onClick={handleOk}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CommentSection;
