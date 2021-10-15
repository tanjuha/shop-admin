import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { setTimeout } from "timers";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../store/slices/productReducer";

const Notification = ({ notification: { message, type, isShow } }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);
  }, [dispatch]);

  return (
    <Alert
      onClose={() => dispatch(removeNotification())}
      show={isShow}
      variant={type}
      dismissible
    >
      {message}
    </Alert>
  );
};

export default Notification;
