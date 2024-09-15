import { BiPhoneCall, BiLogoWhatsapp, BiMailSend } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Contactmodal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
    width: '80%',
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'chocolate'
  };



  return (
    <>
      <div style={overlayStyles} onClick={onClose} />
      <div style={modalStyles}>
        <button style={closeButtonStyles} onClick={onClose}>&times;</button>
        <h2 style={{fontSize: '1.5rem'}}>CONTACT US</h2>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'20px'}}>
          
          <IconContext.Provider value={{ color: "chocolate", className: "global-class-name", size: "4rem"}} >
            <span className='cnt_us_icon'><a href='mailto:someone@example.com'><BiMailSend /></a></span> 
            <span className='cnt_us_icon'><a href='wa.link'><BiLogoWhatsapp /></a></span> 
            <span className='cnt_us_icon'><a href='tel:07590228369'><BiPhoneCall /></a></span> 
          </IconContext.Provider>
        </div>
        {children}
      </div>
    </>
  );
};

export default Contactmodal;