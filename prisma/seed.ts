import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('- Создание регионов')

  await prisma.region.upsert({
    where: { id: 1 },
    update: { name: 'Россия, Москва' },
    create: { id: 1, name: 'Россия, Москва'},
  })

  await prisma.region.upsert({
    where: { id: 2 },
    update: { name: 'Россия, Новосибирск' },
    create: { id: 2, name: 'Россия, Новосибирск'},
  })

  await prisma.region.upsert({
    where: { id: 3 },
    update: { name: 'Россия, Санкт-Петербург' },
    create: { id: 3, name: 'Россия, Санкт-Петербург'},
  })

  await prisma.averagePrice.upsert({
    where: { id: 1 },
    update: { name: '100$' },
    create: { id: 1, name: '100$'},
  })

  console.log('- Создание кухни')
  await prisma.kitchen.upsert({
    where: { id: 1 },
    update: { name: "European" },
    create: { id: 1, name: "European"},
  })

  await prisma.kitchen.upsert({
    where: { id: 2 },
    update: { name: "Russian" },
    create: { id: 2, name: "Russian"},
  })

  await prisma.kitchen.upsert({
    where: { id: 3 },
    update: { name: "Chinese" },
    create: { id: 3, name: "Chinese"},
  })

  console.log('- Создание специальное меню')
  await prisma.specialMenu.upsert({
    where: { id: 1 },
    update: { name: 'Vegetarian' },
    create: { id: 1, name: 'Vegetarian'},
  })

  console.log('- Создание удобства')
  await prisma.facility.upsert({
    where: { id: 1 },
    update: { name: 'Smooking room' },
    create: { id: 1, name: 'Smooking room'},
  })

  await prisma.facility.upsert({
    where: { id: 2 },
    update: { name: 'Terrace' },
    create: { id: 2, name: 'Terrace'},
  })

  await prisma.facility.upsert({
    where: { id: 3 },
    update: { name: 'Open space' },
    create: { id: 3, name: 'Open space'},
  })

  console.log('- Создание 360° туров')
  await prisma.tour.upsert({
    where: { id: 1 },
    update: { name: 'Spectrum Designs' },
    create: { id: 1, name: 'Spectrum Designs'},
  })

  await prisma.tour.upsert({
    where: { id: 2 },
    update: { name: 'Disney World' },
    create: { id: 2, name: 'Disney World'},
  })

  await prisma.tour.upsert({
    where: { id: 3 },
    update: { name: 'Plaza Hotel' },
    create: { id: 3, name: 'Plaza Hotel'},
  })

  console.log('- Создание событий')
  await prisma.event.upsert({
    where: { id: 1},
    update: {},
    create: {
      id: 1,
      author: 'kudago',
      eventName: 'Стендап-вечера с участием комиков из ТВ и YouTube проектов',
      siteName: 'https://kudago.com/msk/event/entertainment-stendap-kontsertyi-so-zvyozdami/',
      facebookLink: 'https://vk.com/kromeshutokru',
      instagramLink: 'https://www.instagram.com/kromeshutok.ru/',
      phone: '+7 977 677 83 60',
      workingTimeFrom: new Date('2021-04-02 19:30:00'),
      workingTimeTo: new Date('2021-04-09 21:30:00'),
      regionId: 1,
      address: 'ресторан Pancho Villa, ст. м. «Октябрьская»',
      mapLink: 'https://goo.gl/maps/rfMyCWu6Aibx2CjN6'
    }
  })

  await prisma.event.upsert({
    where: { id: 2},
    update: {},
    create: {
      id: 2,
      author: 'zeroevent',
      eventName: 'Базовый семинар по терапевтическому тейпированию',
      siteName: 'https://ngs.zeroevent.ru/event/169355690?&from=modal&lid=904542',
      facebookLink: 'https://vk.com/event169355690',
      workingTimeFrom: new Date('2021-04-30 05:30:00'),
      workingTimeTo: new Date('2021-05-01 13:30:00'),
      regionId: 2,
      address: 'Новосибирск, Галущака 2а',
      mapLink: 'https://goo.gl/maps/bK52Cth2zrZZMADP7'
    },
  })

  await prisma.menu.upsert({
    where: { id: 1},
    update: {},
    create: {
      id: 1,
      averagePriceId: 1,
      event: {
        connect: {id:1}
      }
    },
  });

  await prisma.menu.upsert({
    where: {id: 2},
    update: {},
    create: {
      id: 2,
      averagePriceId: 1,
      event: {
        connect: {id:2}
      }
    },
  });

  await prisma.menuKitchens.upsert({
    where: { kitchenId_menuId: {menuId:1, kitchenId: 1}},
    update: {},
    create: {
      menuId: 1,
      kitchenId: 1,
    },
  });

  await prisma.menuKitchens.upsert({
    where: { kitchenId_menuId: {menuId:1, kitchenId: 2}},
    update: {},
    create: {
      menuId: 1,
      kitchenId: 2,
    },
  });

  await prisma.menuKitchens.upsert({
    where: { kitchenId_menuId: {menuId:2, kitchenId: 1}},
    update: {},
    create: {
      menuId: 2,
      kitchenId: 1,
    },
  });

  await prisma.menuKitchens.upsert({
    where: { kitchenId_menuId: {menuId:2, kitchenId: 3}},
    update: {},
    create: {
      menuId: 2,
      kitchenId: 3,
    },
  });

  await prisma.menuFacilities.upsert({
    where: { facilityId_menuId: {menuId:1, facilityId: 1}},
    update: {},
    create: {
      menuId: 1,
      facilityId: 1,
    },
  });

  await prisma.menuFacilities.upsert({
    where: { facilityId_menuId: {menuId:1, facilityId: 2}},
    update: {},
    create: {
      menuId: 1,
      facilityId: 2,
    },
  });

  await prisma.menuSpecialMenu.upsert({
    where: { specialMenuId_menuId: {menuId:2, specialMenuId: 1}},
    update: {},
    create: {
      menuId: 2,
      specialMenuId: 1,
    },
  });

  await prisma.content.upsert({
    where: { id: 1},
    update: {},
    create: {
      id: 1,
      videoOverviewLink: 'https://bali.dnb33.com/events/imani-rooftop',
      tourLink: 'https://bali.dnb33.com/events/imani-rooftop',
      about: '———Free shots every hour——–\n——Free bites——\n———Free welcome drinks———\n',
      event: {
        connect: {id:1}
      }
    },
  });

  await prisma.content.upsert({
    where: { id: 2},
    update: {},
    create: {
      id:2,
      videoOverviewLink: 'https://bali.dnb33.com/events/dance-all-night',
      tourLink: 'https://bali.dnb33.com/events/dance-all-night',
      about: 'Monday is the new weekend at Italian job for Aperitivo Connection.\nFree canapes 5 – 9 PM\nCocktail 60K and only good vibe.\n',
      event: {
        connect: {id:2}
      }
    },
  });

  await prisma.event.upsert({
    where: { id: 3},
    update: {},
    create: {
      id: 3,
      author: 'Italian Job',
      eventName: 'Aperitivo connection',
      siteName: 'https://kudago.com/msk/event/entertainment-stendap-kontsertyi-so-zvyozdami/',
      facebookLink: 'https://www.facebook.com/italianjobseminyak/',
      instagramLink: 'https://www.instagram.com/kromeshutok.ru/',
      phone: '+7 977 677 83 60',
      workingTimeFrom: new Date('2021-04-02 19:30:00'),
      workingTimeTo: new Date('2021-04-09 21:30:00'),
      regionId: 1,
      address: 'Jl. Kayu Aya No.104, Seminyak, Kuta Utara Badung',
      mapLink: 'https://goo.gl/maps/rfMyCWu6Aibx2CjN6'
    }
  })

  await prisma.event.upsert({
    where: { id: 4},
    update: {},
    create: {
      id: 4,
      author: 'Jl. Raya Legian',
      eventName: 'Amazing Cabaret Shows',
      siteName: 'https://kudago.com/msk/event/entertainment-stendap-kontsertyi-so-zvyozdami/',
      facebookLink: '',
      instagramLink: '',
      phone: '+7 977 677 83 60',
      workingTimeFrom: new Date('2021-04-02 19:30:00'),
      workingTimeTo: new Date('2021-04-09 21:30:00'),
      regionId: 2,
      address: 'Jl. Raya Legian No.36, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
      mapLink: 'https://goo.gl/maps/rfMyCWu6Aibx2CjN6'
    }
  })

  await prisma.event.upsert({
    where: { id: 5},
    update: {},
    create: {
      id: 5,
      author: 'Jl. Kayu Aya',
      eventName: 'Red Carpet Champagnebar Bali',
      siteName: 'https://kudago.com/msk/event/entertainment-stendap-kontsertyi-so-zvyozdami/',
      facebookLink: '',
      instagramLink: '',
      phone: '+7 977 677 83 60',
      workingTimeFrom: new Date('2021-04-02 19:30:00'),
      workingTimeTo: new Date('2021-04-09 21:30:00'),
      regionId: 2,
      address: 'Jl. Kayu Aya No.42, Seminyak, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia',
      mapLink: 'https://goo.gl/maps/GkntYbD3Jj3KjJT26'
    }
  })

  await prisma.event.upsert({
    where: { id: 6},
    update: {},
    create: {
      id: 6,
      author: 'MUSICAL JUORNEY',
      eventName: 'Jangle',
      siteName: 'https://bali.dnb33.com/events/clubs/jungle/Luly5',
      facebookLink: '',
      instagramLink: '',
      phone: '+7 977 677 83 60',
      workingTimeFrom: new Date('2021-04-02 19:30:00'),
      workingTimeTo: new Date('2021-04-09 21:30:00'),
      regionId: 2,
      address: 'Jl. Umalas I, N° 7, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361',
      mapLink: 'https://goo.gl/maps/MDXT5K8eqdzf8mqf7'
    }
  })

  console.log('DONE')
}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })