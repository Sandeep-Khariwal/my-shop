import { notifications } from "@mantine/notifications";

export function SuccessNotification(message: string) {

  notifications.show({
    color: "green",
    position: "top-center",
    title: "Success",
    message: message,
  });
}

export function ErrorNotification(message: string) {

  notifications.show({
    color: "red",
    position: "top-center",
    title: "Error",
    message: message,
  });
}