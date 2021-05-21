// 1name
const titBos = [
  {
    text: {
      content: "Tuscan Kale",
    },
  },
];
const namBos = {
  //   title: "Tuscan Kale",
  title: titBos,
};

// 1subtitle
const sbbBas = [
  {
    //   type: "rich_text",
    text: {
      content: "SUBTITLE ",
    },
  },
];

// 1page
export const testPagData = [
  "f0f9f61ea5bd44b596151f2fa5043e4e",
  // "0fda1e0c2d2843b497b0c4a58680f807"
  // "058e5f0b9d9d4a879078a76db7f7a2cf"
];

// 1database
export const testNotData =
  //
  "2eed8e87-e3a4-427c-a55d-02eb1b8f9362";

// [
//     "2eed8e87-e3a4-427c-a55d-02eb1b8f9362",
//     // "946fd289-20d1-42d6-9467-fdcf1db1ba3f"
// ];

//
export const notionPage = {
  Name: namBos,
  //   subtitle: sbbBas,
};

// const response = await notion.pages.create({
//     parent: {
//       database_id: '48f8fee9cd794180bc2fec0398253067',
//     },
//     properties: {
//       Name: {
//         title: [
//           {
//             text: {
//               content: 'Tuscan Kale',
//             },
//           },
//         ],
//       },
//       Description: {
//         text: [
//           {
//             text: {
//               content: 'A dark green leafy vegetable',
//             },
//           },
//         ],
//       },
//       'Food group': {
//         select: {
//           name: '🥦 Vegetable',
//         },
//       },
//       Price: {
//         number: 2.5,
//       },
//     },
//     children: [
//       {
//         object: 'block',
//         type: 'heading_2',
//         heading_2: {
//           text: [
//             {
//               type: 'text',
//               text: {
//                 content: 'Lacinato kale',
//               },
//             },
//           ],
//         },
//       },
//       {
//         object: 'block',
//         type: 'paragraph',
//         paragraph: {
//           text: [
//             {
//               type: 'text',
//               text: {
//                 content: 'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
//                 link: {
//                   url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
//                 },
//               },
//             },
//           ],
//         },
//       },
//     ],
//   });
//   console.log(response);
// })();
