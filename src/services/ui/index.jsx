import { notification } from "antd";
import "antd/dist/antd.css";

export default class UiManager {
  static openNotification(type, message) {
    notification[type]({
      message,
    });
  }
}
