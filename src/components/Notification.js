const Notification = ({ notification }) => {
  return notification.type ? (
    <div className={"alert " + notification.type}>{notification.message}</div>
  ) : (
    <div></div>
  );
};

export default Notification;
