const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const isEmail = x => emailPattern.test(x);

export const isPhone = x => phonePattern.test(x);

export const isNumber = x => !isNaN(+x);

export const max = x => y => x >= y;

export const min = x => y => x <= y;

export const all = (...a) => x => a.every(f => f(x));

export const any = (...a) => x => a.some(f => f(x));
