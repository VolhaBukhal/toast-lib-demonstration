import { ToastPortal, useToastRef } from 'toast-lib-react'

import {Button} from '../Button/index'

import './Example.css'

const SuccessSettings = {
  title: 'Success',
  mode: 'success',
  message: 'This is example of success toast',
  animationType: 'move',
  position: 'topRight',
}

const InfoSettings = {
  title: 'Info',
  mode: 'info',
  message: 'This is example of info toast',
  animationType: 'scale',
  position: 'topRight',
}

const WarningSettings = {
  title: 'Warning',
  mode: 'warning',
  message: 'This is example of warning toast',
  animationType: 'fade',
  position: 'topRight',
}

const ErrorSettings = {
  title: 'Error',
  mode: 'error',
  message: 'This is example of error toast',
  animationType: 'move',
  position: 'topRight',
}

const PortalSettings = {
  autoClose: true,
  autoCloseTime: 3000,
  position: 'topRight',
  margin: 'large',
}

export const Example = () => {

  const { toastRef, addToast } = useToastRef()

  const addSuccess = () => addToast({
    ...SuccessSettings })

  const addInfo = () => addToast({
    ...InfoSettings })

  const addWarning = () => addToast({
    ...WarningSettings })

  const addError = () => addToast({
    ...ErrorSettings })

  return (
    <div className="group">
      <Button handleToast={addSuccess} label="Success Toast"/>
      <Button handleToast={addInfo} label="Info Toast"/>
      <Button handleToast={addWarning} label="Warning Toast"/>
      <Button handleToast={addError} label="Error Toast"/>
      <ToastPortal ref={toastRef} {...PortalSettings} />
    </div>
  )
}
