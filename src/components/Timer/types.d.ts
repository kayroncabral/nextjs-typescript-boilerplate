import { AlertProps as AlertMaterialProps } from '@mui/material/Alert';
import { Props } from '../../types';

export interface AlertProps extends AlertMaterialProps, Props {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
