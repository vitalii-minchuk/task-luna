const ProgressDesktopStepperStyles = {
  wrapper: {
    height: '100vh',
    width: '568px',
    paddingBottom: '56px',
    paddingTop: '100px',
    background: 'linear-gradient(339deg, #0D3251 0%, #19476C 100%)',
  },
  description: {
    background: '#134267',
    color: '#96CAF7',
    borderRadius: '8px',
    padding: '16px',
    letterSpacing: '-0.1em',
  },
  horizontalStepperDots: {
    background: 'transparent',
    '& .MuiMobileStepper-dots': {
      gap: '12px',
    },
    '& .MuiMobileStepper-dot': {
      width: '8px',
      height: '8px',
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: '#96CAF7',
    },
  },
  verticalStepperDots: {
    '& .MuiStepLabel-iconContainer': {
      border: '2px solid #32ABF2',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      marginRight: '16px',
    },
    '& .MuiStepIcon-root': {
      width: '0',
      height: '0',
    },
    '& .MuiStepIcon-root.Mui-active': {
      borderRadius: '50%',
      backgroundColor: '#32ABF2',
      outline: '2px solid #32ABF2',
      width: '28px',
      height: '28px',
    },
    '& .MuiSvgIcon-root.Mui-completed': {
      borderRadius: '50%',
      backgroundColor: '#32ABF2',
      outline: '2px solid #32ABF2',
      width: '28px',
      height: '28px',
    },
    '& .MuiStepConnector-line': {
      marginY: '-8px',
      borderLeft: '2px solid #32ABF2',
      marginLeft: '3px',
      height: '48px',
    },
  },
};

export default ProgressDesktopStepperStyles;
