import { Component } from "react";

/**
 * @todo: remove container in name
 * @param {string | React.Component} PageContext
 * @returns {string}
 */
export const buildClassPage = (PageContext: string | Component): string => {
  const PREFIX = 'page-';

  if (typeof PageContext === 'string') {
    return PREFIX + PageContext;
  }

  if (!PageContext.constructor.name) {
    return ''
  }

  return PREFIX + PageContext.constructor.name.toLowerCase();
};
