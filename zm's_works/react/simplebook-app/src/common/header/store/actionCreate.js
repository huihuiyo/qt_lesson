import * as CONTANTS from './constants';
// JSON sheame
export const searchFocus = (opt) => {
  return {
    type: CONTANTS.SEARCH_FOCUS,
    opt
  }
}