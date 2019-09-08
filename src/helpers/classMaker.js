export const buildClassPage = (PageContext) => {
  const PREFIX = 'page-';

  if (typeof PageContext === 'string') {
    return PREFIX + PageContext;
  }

  if (!PageContext.constructor.name) {
    return ''
  }

  return PREFIX + PageContext.constructor.name.toLowerCase();
};
