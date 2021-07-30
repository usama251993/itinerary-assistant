import { NavigationExtras } from '@angular/router';

/**
 * @deprecated - Use from Shared Interfaces
 *
 * Used in navigate function of `*-core.service`
 *
 * ```ts
 * interface RouterPayloadModel {
 *   routes : string[];
 *   extras : NavigationExtras; // from @angular/router
 * }
 * ```
 *
 * @export
 * @interface RouterPayloadModel
 */
export interface RouterPayloadModel {
  /**
   * Array of routes to navigate
   *
   * @type {string[]}
   * @memberof RouterPayloadModel
   */
  routes: string[];

  /**
   * Navigation extras - from `@angular/router`
   *
   * @type {NavigationExtras}
   * @memberof RouterPayloadModel
   */
  extras: NavigationExtras;
}