import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IaCoreService {

  navbar: { [key: string]: any };

  constructor() {
    this.navbar = {
      state: {
        bIsMobile: false,
        bIsOpen: true
      },
      trigger: {
        expand: {
          icon: {
            style: 'fas',
            name: 'bars',
            transform: {
              size: '2x'
            }
          }
        },
        collapse: {
          icon: {
            style: 'fas',
            name: 'arrow-left',
            transform: {
              size: '2x'
            }
          }
        }
      },
      content: [
        {
          icon: {
            style: 'fas',
            name: 'th',
            transform: {
              size: '2x'
            }
          },
          label: 'Dashboard',
          children: []
        },
        {
          icon: {
            style: 'fas',
            name: 'passport',
            transform: {
              size: '2x'
            }
          },
          label: 'Trips',
          children: [
            {
              icon: {
                style: 'fas',
                name: 'th-list',
                transform: {
                  size: '2x'
                }
              },
              label: 'All Trips',
              children: []
            },
            {
              icon: {
                style: 'fas',
                name: 'calendar-alt',
                transform: {
                  size: '2x'
                }
              },
              label: 'Upcoming',
              children: []
            },
            {
              icon: {
                style: 'fas',
                name: 'heart',
                transform: {
                  size: '2x'
                }
              },
              label: 'Favourite',
              children: []
            },
            {
              icon: {
                style: 'fas',
                name: 'luggage-cart',
                transform: {
                  size: '2x'
                }
              },
              label: 'Wishlist',
              children: []
            },
            {
              icon: {
                style: 'fas',
                name: 'ellipsis-h',
                transform: {
                  size: '2x'
                }
              },
              label: 'more',
              children: [
                {
                  icon: {
                    style: 'fas',
                    name: 'drafting-compass',
                    transform: {
                      size: '2x'
                    }
                  },
                  label: 'Draft',
                  children: []
                },
                {
                  icon: {
                    style: 'fas',
                    name: 'archive',
                    transform: {
                      size: '2x'
                    }
                  },
                  label: 'Archive',
                  children: []
                },
                {
                  icon: {
                    style: 'fas',
                    name: 'trash-ali',
                    transform: {
                      size: '2x'
                    }
                  },
                  label: 'Trash',
                  children: []
                }
              ]
            }
          ]
        },
        {
          icon: {
            style: 'fas',
            name: 'chart-line',
            transform: {
              size: '2x'
            }
          },
          label: 'Travel Trend',
          children: []
        },
        {
          icon: {
            style: 'fas',
            name: 'lightbulb',
            transform: {
              size: '2x'
            }
          },
          label: 'Tips and Tricks',
          children: []
        },
        {
          icon: {
            style: 'fas',
            name: 'compass',
            transform: {
              size: '2x'
            }
          },
          label: 'Explore',
          children: []
        },
        {
          icon: {
            style: 'fas',
            name: 'user',
            transform: {
              size: '2x'
            }
          },
          label: 'Profile',
          children: [
            {
              icon: {
                style: 'fas',
                name: 'sign-in-alt',
                transform: {
                  size: '2x'
                }
              },
              label: 'Login',
              children: []
            },
            {
              icon: {
                style: 'fas',
                name: 'user-plus',
                transform: {
                  size: '2x'
                }
              },
              label: 'Sign Up',
              children: []
            }
          ]
        }
      ]
    }
  }

  getAsset(sAsset: string): Observable<{ [key: string]: string }> {
    if (sAsset === '[IA App Asset] navbar') return of(this.navbar);
  }

}
