import { Form, Input, Select, Button, App } from 'antd'

export default function LeadForm({ submitText = 'Submit', withMessage = false, onDone }) {
  const [form] = Form.useForm()
  const { message } = App.useApp()

  const submit = () => {
    message.success('Thank you. Our team will contact you within 24 hours.')
    form.resetFields()
    onDone?.()
  }

  return (
    <Form form={form} layout="vertical" onFinish={submit} requiredMark={false}>
      <div className="grid sm:grid-cols-2 gap-x-4">
        <Form.Item name="name" label="Full name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Mobile number"
          rules={[
            { required: true, message: 'Please enter your number' },
            { pattern: /^[0-9+\s-]{10,15}$/, message: 'Enter a valid number' },
          ]}
        >
          <Input placeholder="+91" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: 'email', message: 'Enter a valid email' }]}>
          <Input placeholder="name@email.com" />
        </Form.Item>
        <Form.Item name="city" label="City">
          <Input placeholder="Delivery city" />
        </Form.Item>
      </div>
      <Form.Item name="type" label="I am a" initialValue="home">
        <Select
          options={[
            { value: 'home', label: 'Home owner' },
            { value: 'hotel', label: 'Hotel / Resort' },
            { value: 'builder', label: 'Builder / Developer' },
            { value: 'architect', label: 'Architect / Interior designer' },
            { value: 'dealer', label: 'Dealer / Plumber' },
          ]}
        />
      </Form.Item>
      {withMessage && (
        <Form.Item name="message" label="Your requirement">
          <Input.TextArea rows={4} placeholder="Number of bathrooms, products you need, site location" />
        </Form.Item>
      )}
      <Button type="primary" htmlType="submit" size="large" block>
        {submitText}
      </Button>
    </Form>
  )
}
