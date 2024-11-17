import React from 'react'

import { 
  IconEye,
  IconEyeOff,
  IconFile,
  IconPlus,
  IconDownload,
  IconCloudUpload,
  IconCloudDownload,
  IconCloudComputing,
  IconLayoutDashboard,
  IconX,
  IconLogin,
  IconLogout,
  IconAlignJustified,
  IconDotsVertical,
  IconRefresh,
  IconFold,
  IconLoaderQuarter,
  IconAlertOctagon,
  IconAlertTriangle,
  IconInfoCircle,
  IconCircleCheck,
  IconTrash,
  IconChevronUp,
  IconChevronDown,
  IconWorldUpload,
  IconCaretRight,
  IconSearch,
} from '@tabler/icons';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const IconProps = {
  size: 20,
  stroke: 1.5
};

const Icon = Object.assign({}, {
    Eye: (props) => <IconEye {...IconProps} {...props} />,
    EyeOff: (props) => <IconEyeOff {...IconProps} {...props} />,
    File: (props) => <IconFile {...IconProps} {...props} />,
    Plus: (props) => <IconPlus {...IconProps} {...props} />,
    Play: (props) => <IconCaretRight {...IconProps} {...props} />,
    Download: (props) => <IconDownload {...IconProps} {...props} />,
    CloudComputing: (props) => <IconCloudComputing {...IconProps} {...props} />,
    CloudDownload: (props) => <IconCloudDownload {...IconProps} {...props} />,
    CloudUpload: (props) => <IconCloudUpload {...IconProps} {...props} />,
    Dashboard: (props) => <IconLayoutDashboard {...IconProps} {...props} />,
    WorldUpload: (props) => <IconWorldUpload {...IconProps} {...props} />,
    Cross: (props) => <IconX {...IconProps} {...props} />,
    Login: (props) => <IconLogin {...IconProps} {...props} />,
    Logout: (props) => <IconLogout {...IconProps} {...props} />,
    Menu: (props) => <IconAlignJustified {...IconProps} {...props} />,
    MenuDot: (props) => <IconDotsVertical {...IconProps} {...props} />,
    Refresh: (props) => <IconRefresh {...IconProps} {...props} />,
    Fold: (props) => <IconFold {...IconProps} {...props} />,
    Spinner: (props) => <IconLoaderQuarter {...IconProps} {...props} />,
    Error: (props) => <IconAlertOctagon {...IconProps} {...props} />,
    Warning: (props) => <IconAlertTriangle {...IconProps} {...props} />,
    Info: (props) => <IconInfoCircle {...IconProps} {...props} />,
    Success: (props) => <IconCircleCheck {...IconProps} {...props} />,
    Trash: (props) => <IconTrash {...IconProps} {...props} />,
    Search: (props) => <IconSearch {...IconProps} {...props} />,
    ChevronUp: (props) => <IconChevronUp {...IconProps} {...props} />,
    ChevronDown: (props) => <IconChevronDown {...IconProps} {...props} />,
    Circle: (props) => <FiberManualRecordIcon {...props} />,
});

export default Icon;