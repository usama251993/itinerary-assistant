import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Interface for a `FontAwesome` icon definition
 *
 * ```ts
 * interface IconModel {
 *   style : IconPrefix; // from `fontawesome-common-types`
 *   name  : IconName;   // from `fontawesome-common-types`
 * }
 * ```
 *
 * @export
 * @interface IconModel
 */
export interface IconModel {
  style: IconPrefix;
  name: IconName;
}

/**
 * Stub for an `IconModel`
 *
 * ```ts
 * const ICON_STUB: IconModel = {
 *   style : 'fas',
 *   name  : 'info'
 * }
 * ```
 */
export const ICON_STUB: IconModel = {
  style: 'fas',
  name: 'info'
};