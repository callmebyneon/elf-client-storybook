import {
  // Form,
  RangeInput,
  CheckboxInput,
  SwitchInput,
  RadioInput,
  TextInput,
} from './Inputs';

import { FileUploader } from './FileUploader';

export const Input = Object.assign({}, {
  File: FileUploader,
  Range: RangeInput,
  Checkbox: CheckboxInput,
  Switch: SwitchInput,
  Radio: RadioInput,
  Text: TextInput,
})