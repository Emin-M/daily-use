//! categorizing data
function categorize(array, parent) {
    let newArray = [];

    for (let element in array) {
        if (array[element].parentId === parent) {
            let newObject = {};

            newObject.name = array[element].name;
            let children = categorize(array, array[element].id);
            newObject.children = children;

            newArray.push(newObject);
        };
    };
    return newArray;
};

//! usage
const data = [{
        id: 312,
        name: "Electronics",
        parentId: null,
    },

    {
        id: 534,
        name: "Mobile",
        parentId: 312,
    },

    {
        id: 888,
        name: "Tv&Monitors",
        parentId: null,
    },

    {
        id: 132,
        name: "Iphone",
        parentId: 534,
    },

    {
        id: 093,
        name: "LG",
        parentId: 888,
    },
];

let object = categorize(data, null);
console.log(JSON.stringify(object, null, 2));
// [{
//         "name": "Electronics",
//         "children": [{
//             "name": "Mobile",
//             "children": [{
//                 "name": "Iphone",
//                 "children": []
//             }]
//         }]
//     },
//     {
//         "name": "Tv&Monitors",
//         "children": [{
//             "name": "LG",
//             "children": []
//         }]
//     }
// ]