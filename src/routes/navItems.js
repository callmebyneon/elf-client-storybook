import Icon from "../assets/icons";

export const openItems = [
  {
    id: "0",
    title: "Open API",
    items: [
      {
        id: "0",
        path: "/api-docs",
        title: "Document",
        icon: <Icon.File />,
      },
    ],
  },
];

export const navItems = [
  ...openItems,
  {
    id: "1",
    title: "Models",
    items: [
      {
        id: "0",
        path: "/upload-model",
        title: "Upload",
        icon: <Icon.CloudUpload />,
      },
      {
        id: "1",
        path: "/download-model",
        title: "Download",
        icon: <Icon.CloudDownload />,
      },
      {
        id: "2",
        path: "/avg-model",
        title: "Averaging",
        icon: <Icon.Fold />,
      },
      {
        id: "3",
        path: "/model-publish",
        title: "Publish",
        icon: <Icon.WorldUpload />,
      },
    ],
  },
  {
    id: "2",
    title: "Monitoring",
    items: [
      {
        id: "2",
        path: "/dashboard",
        title: "Dashboard",
        icon: <Icon.Dashboard />,
      },
    ],
  },
];
