export const familyMember = {
    id: 'Anderson.1',
    firstName: 'Henriette',
    Country: 'USA',
    lastName: 'Andersen',
    parents: [
      {
        firstName: 'Thomas'
      },
      {
        firstName: 'Mary Kay'
      }
    ],
    children: [
      {
        firstName: 'Henriette Thaulow',
        gender: 'female',
        grade: 5,
        pets: [
          {
            givenName: 'Fluffy'
          }
        ]
      }
    ],
    address: {
      state: 'WA',
      county: 'King',
      city: 'Seattle'
    }
};

export const familyData = [
    {
      id: 'Smith.1',
      firstName: 'Robert',
      Country: 'USA',
      lastName: 'Smith',
      parents: [
        {
          firstName: 'Robert'
        },
        {
          firstName: 'Jennifer'
        }
      ],
      children: [
        {
          firstName: 'Emma',
          gender: 'female',
          grade: 3,
          pets: [
            {
              givenName: 'Snowball'
            }
          ]
        },
        {
          firstName: 'Ethan',
          gender: 'male',
          grade: 7,
          pets: [
            {
              givenName: 'Bella'
            }
          ]
        }
      ],
      address: {
        state: 'TX',
        county: 'Harris',
        city: 'Houston'
      }
    },
    {
      id: 'Garcia.2',
      firstName: 'Carlos',
      Country: 'USA',
      lastName: 'Garcia',
      parents: [
        {
          firstName: 'Carlos'
        },
        {
          firstName: 'Maria'
        }
      ],
      children: [
        {
          firstName: 'Sofia',
          gender: 'female',
          grade: 5,
          pets: [
            {
              givenName: 'Max'
            }
          ]
        },
        {
          firstName: 'Daniel',
          gender: 'male',
          grade: 9,
          pets: [
            {
              givenName: 'Lucky'
            }
          ]
        }
      ],
      address: {
        state: 'CA',
        county: 'Los Angeles',
        city: 'Los Angeles'
      }
    },
    {
      id: 'Kim.3',
      firstName: 'Joon',
      Country: 'South Korea',
      lastName: 'Kim',
      parents: [
        {
          firstName: 'Joon'
        },
        {
          firstName: 'Yuna'
        }
      ],
      children: [
        {
          firstName: 'Minji',
          gender: 'female',
          grade: 6,
          pets: [
            {
              givenName: 'Coco'
            }
          ]
        }
      ],
      address: {
        state: 'Seoul',
        county: 'Gangnam',
        city: 'Seoul'
      }
    },
    {
      id: 'Müller.4',
      firstName: 'Johann',
      Country: 'Germany',
      lastName: 'Müller',
      parents: [
        {
          firstName: 'Johann'
        },
        {
          firstName: 'Katrin'
        }
      ],
      children: [
        {
          firstName: 'Lena',
          gender: 'female',
          grade: 8,
          pets: [
            {
              givenName: 'Milo'
            }
          ]
        }
      ],
      address: {
        state: 'Bavaria',
        county: 'Munich',
        city: 'Munich'
      }
    },
    {
      id: 'Chen.5',
      firstName: 'Wei',
      Country: 'China',
      lastName: 'Chen',
      parents: [
        {
          firstName: 'Wei'
        },
        {
          firstName: 'Li'
        }
      ],
      children: [
        {
          firstName: 'Yun',
          gender: 'male',
          grade: 4,
          pets: [
            {
              givenName: 'Lucky'
            }
          ]
        },
        {
          firstName: 'Mei',
          gender: 'female',
          grade: 6,
          pets: [
            {
              givenName: 'Mochi'
            }
          ]
        }
      ],
      address: {
        state: 'Guangdong',
        county: 'Guangzhou',
        city: 'Guangzhou'
      }
    }
  ];
   
//infer the type of user
export type TUser = typeof familyMember; 