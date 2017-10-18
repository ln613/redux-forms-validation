const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const isEmail = x => new RegExp(emailPattern).test(x);

export const isNumber = x => !isNaN(+x);

export const max = x => y => x >= y;

export const min = x => y => x <= y;

export const all = (...a) => x => a.every(f => f(x));

export const any = (...a) => x => a.some(f => f(x));
