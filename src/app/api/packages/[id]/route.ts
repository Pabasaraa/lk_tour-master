import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: any) {
  // Cast context.params to our expected type
  const { id } = context.params as { id: string };

  // Example package data (Replace with actual database fetching)
  const packages: Record<string, any> = {
    '1': {
      title: 'Sri Lanka Hill Country Tour',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },

    '2': {
      title: 'Sri Lanka Highland Escape',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },

    '3': {
      title: 'Romantic Treat in Sri Lanka',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },

    '4': {
      title: 'Sri Lanka Culture Tour',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },

    '5': {
      title: 'Sri Lankan Wild Life Tour',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },

    '6': {
      title: 'Sri Lanka Historical Tour',
      titleDesc:
        "Explore the cultural charm of Sri Lanka's scenic hill country.",
      description:
        "Discover Sri Lanka's Hill Country! Embark on a breathtaking journey through lush tea plantations, misty mountains, cascading waterfalls, and charming colonial towns. Experience the cool climate of Nuwara Eliya, the scenic train ride to Ella, and panoramic views from Horton Plains. A perfect escape into nature’s paradise!",
      days: [
        {
          day: '1',
          image: '/img/pk1-day1.jpg',
          activities: [
            'Airport Pickup and Assistance.',
            'Transfer to Kandy.',
            'Check-Into The Hotel and Relax.',
            'Enjoy a Street Food Tour.',
          ],
        },
        {
          day: '2',
          image: '/img/pk1-day2.jpg',
          activities: [
            'Kandy lake and view point',
            'Peradeniya Botanical Garden',
            'Temple of Tooth (World Heritage Site)',
            'Kandy National Museum',
          ],
        },
        {
          day: '3',
          image: '/img/pk1-day3.jpg',
          activities: [
            'Ambuluwawa Tower',
            'Ramboda Falls',
            'Tea Factory and Plantation',
            'Overnight stay in Nuwara Eliya',
          ],
        },
        {
          day: '4',
          image: '/img/pk1-day4.jpg',
          activities: [
            'Train Ride to Ella',
            'Nine Arch Bridge',
            'Little Adam’s Peak hiking',
            'Overnight stay in Ella',
          ],
        },
      ],
      overview: {
        duration: '4 Nights / 5 Days',
        transport: 'Sedan / Van (With A/C)',
        journey: 'Colombo > Kandy > Nuwara Eliya > Ella',
        guide: 'Yes (Chauffeur guide)',
        price: 'On Request',
      },
    },
  };

  const packageData = packages[id];

  if (!packageData) {
    return NextResponse.json({ error: 'Package not found' }, { status: 404 });
  }

  return NextResponse.json(packageData);
}
