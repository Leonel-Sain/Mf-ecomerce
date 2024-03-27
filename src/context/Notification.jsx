import React, { createContext, useContext, useState } from "react";

const Notification = ({ notification }) => {
  const { message, severity } = notification;

  const background = {
    success: "cyan",
    error: "red",
    warning: "yellow",
    info: "orange"
  };
  const notificationStyle = {
    position: "fixed",
    bottom: "1rem",
    left: "80%",
    zIndex: 9999,
    padding: "10px",
    backgroundColor: background[severity] || background.default,
    color: "white",
    maxWidth: "90%",
    textAlign: "center",
  };

return <div style={notificationStyle}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
const [notifications, setNotifications] = useState([]);

const setNotification = (severity, message) => {
  const newNotification = { severity, message };
  setNotifications([...notifications, newNotification]);

  setTimeout(() => {
    // Remover la notificación después de 2 segundos
    setNotifications(notifications.filter(notification => notification !== newNotification));
  }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <div style={{ position: "relative" }}>
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
