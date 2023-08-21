import { useContext } from 'react';
import gsap from 'gsap/dist/gsap';
const LayoutWrapper = ({ children, ...props }) => {
  return (
    <div id="smooth-wrapper" {...props}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
