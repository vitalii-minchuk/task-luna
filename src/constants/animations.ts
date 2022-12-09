export const fadeInVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const logoVariants = {
  hidden: {
    x: -100,
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};
