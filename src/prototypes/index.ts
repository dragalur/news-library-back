import array from './array.prototypes';
import string from './string.prototype';
import number from './number.prototype';
import object from './object.prototypes';

export const initializePrototypes = () => {
    array();
    string();
    number();
    object();
};
