import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      hideProgressBar={true}
      closeOnClick={true}
      transition={Zoom}
      autoClose={3000}
      stacked={true}
    />
  );
};

export default ToastifyContainer;
