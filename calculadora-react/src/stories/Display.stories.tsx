import type { Meta, StoryObj } from '@storybook/react'
import { Display } from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display
}

export default meta

type Story = StoryObj<typeof Display>

export const Default: Story = {
  args: {
    value: '123'
  }
}

export const Error: Story = {
  args: {
    value: 'ERROR'
  }
}