const ProgressMobileStepperStyles = {
  wrapper: {
    pb: '32px',
    background: '#fff',
    mx: 'auto',
    width: '100%',
    px: '32px',
  },
  progress: {
    '& .MuiMobileStepper-progress': {
      position: 'absolute',
      width: '100%',
      left: '0',
      right: '0',
      border: '1px solid #C9D3E0',
      backgroundColor: 'transparent',
      height: '8px',
      borderRadius: '4px',
    },
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#E8EAED',
    },
    '& .MuiButton-root': {
      backgroundColor: 'transparent',
      color: '#4F637D',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '18px',
    },
    '& .MuiButton-root:disabled': {
      color: '#C3CAD5',
    },
  },
  nextButton: {
    position: 'absolute',
    zIndex: '20',
    bottom: '-32px',
    right: '4px',
  },
  backButton: {
    position: 'absolute',
    zIndex: '20',
    bottom: '-32px',
    left: '4px',
  },
};

export default ProgressMobileStepperStyles;
