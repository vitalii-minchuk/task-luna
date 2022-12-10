const finalStepStyles = (isTablet: boolean) => ({
  wrapper: {
    width: isTablet ? '100%' : '479px',
    height: isTablet ? '100vh' : '519px',
    marginX: isTablet ? '0' : 'auto',
    marginTop: isTablet ? '0' : '8vh',
    bgcolor: '#fff',
    boxShadow: '0px 5px 20px rgba(108, 117, 139, 0.2)',
    px: '32px',
    pt: '20px',
    pb: '16px',
  },
  button: {
    width: '100%',
    background: '#32ABF2',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    textTransform: 'none',
  },
  title: {
    fontWeight: '500',
    align: 'center',
    color: '#134267',
    lineHeight: '120%',
    fontSize: '16px',
    pb: '8px',
  },
  text: {
    align: 'center',
    color: '#4F637D',
    lineHeight: '21px',
    fontSize: '14px',
    pb: '24px',
  },
  imageBox: {
    mb: '22px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
});

export default finalStepStyles;
