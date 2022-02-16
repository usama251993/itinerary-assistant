import { Icon } from '../../imports/models';

/**
 * Interface for Navigation Item
 *
 * ```ts
 * interface INavigationItem {
 *   label    : string;
 *   routes   : string[];
 *   icon     : IconModel;
 *   children : INavigationItem[];
 * }
 * ```
 *
 * @interface INavigationItem
 */
interface INavigationItem {
  /**
   * Navigation Item Label
   *
   * @type {(string)}
   * @memberof INavigationItem
   */
  label: string;

  /**
   * Navigation Item Routes
   *
   * @type {string[]}
   * @memberof INavigationItem
   */
  routes: string[];

  /**
   * Navigation Item Icon
   *
   * @type {Icon}
   * @memberof INavigationItem
   */
  icon: Icon;

  /**
   * Array of children Navigation items
   *
   * @type {INavigationItem[]}
   * @memberof INavigationItem
   */
  children: INavigationItem[];
}

/**
 * Stub for Navigation Item
 *
 * ```ts
 * const NavigationItemStub: INavigationItem = {
 *   label: '',
 *   routes: [],
 *   icon: new Icon(),
 *   children: []
 * }
 * ```
 */
const NavigationItemStub: INavigationItem = {
  label: '',
  routes: [],
  icon: new Icon({}),
  children: []
};

export class NavigationItem implements INavigationItem {
  label: string;
  routes: string[];
  icon: Icon;
  children: INavigationItem[];

  /**
   * ### Navigation Item
   *
   * Creates an instance of NavigationItem.
   *
   * ```ts
   * const _NavigationItem: INavigationItem = new NavigationItem({
   *   label    : '',
   *   routes   : [],
   *   icon     : new Icon(),
   *   children : []
   * });
   * ```
   *
   * @param {INavigationItem} [NavigationItemStub]
   * @memberof NavigationItem
   */
  constructor({
    label = NavigationItemStub.label,
    routes = NavigationItemStub.routes,
    icon = NavigationItemStub.icon,
    children = NavigationItemStub.children
  }: Partial<INavigationItem>) {
    this.label = label;
    this.routes = routes;
    this.icon = icon;
    this.children = children;
  }
}
