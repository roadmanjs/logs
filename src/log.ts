import _get from 'lodash/get';
import debug from 'debug';

export const appName = _get(process.env, 'ROADMAN', 'roadman');

const libraryPrefix = appName;

/**
 * Use to log in general case
 */
export const log = debug(`${libraryPrefix}:info`);

/**
 * Use for verbose log
 */
export const verbose = debug(`${libraryPrefix}:verbose`);
