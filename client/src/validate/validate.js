export const validateTitle = (title) => {
  console.log('Validating title:', title);

  if (title.length <= 0) {
      return 'Title is required!';
  } else if (title.length <= 2) {
      return 'Title must be at least 2 characters!';
  } else {
      return '';
  }
};