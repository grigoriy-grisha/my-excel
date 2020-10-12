const state = {
    // numberStrig: 65,
    nextItem: 1,
    replay: 0,
    items: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    arrayForConcat: [],
    rowNumbers: 26,
    rowLetters: 25,
    counter: 0,
    storageLetters: {},
    storageNumbers: {}, 
    intermediateStateValue: {}, 
    storageFontStyle: {},
    storageFontSize: {},
    storageFontColorBackground: {},
    storageTextAlign: {},
    storageFontColorText: {},
}

// const state = {
//     "nextItem": 1,
//     "replay": 0,
//     "items": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP"],
//     "arrayForConcat": [],
//     "rowNumbers": 29,
//     "rowLetters": 41,
//     "counter": 16,
//     "storageLetters": {
//         "28": {
//             "width": 299
//         }
//     },
//     "storageNumbers": {
//         "8": {
//             "height": 89
//         }
//     },
//     "intermediateStateValue": {
//         "AC5": {
//             "value": "asdasd"
//         },
//         "AD4": {
//             "value": "asd"
//         },
//         "AD7": {
//             "value": "asd"
//         },
//         "AC8": {
//             "value": "asda"
//         },
//         "AB8": {
//             "value": "sd"
//         },
//         "Z7": {
//             "value": "asd"
//         },
//         "Z6": {
//             "value": "asd"
//         },
//         "Z1": {
//             "value": ""
//         },
//         "AG7": {
//             "value": ""
//         }
//     },
//     "storageFontStyle": {
//         "C5": ["italic", "bold", "underline"],
//         "D5": ["italic", "bold", "underline"],
//         "E5": ["italic", "bold", "underline"],
//         "F5": ["italic", "bold", "underline"],
//         "G5": ["italic", "bold", "underline"],
//         "C6": ["italic", "bold", "underline"],
//         "D6": ["italic", "bold", "underline"],
//         "E6": ["italic", "bold", "underline"],
//         "F6": ["italic", "bold", "underline"],
//         "G6": ["italic", "bold", "underline"],
//         "C7": ["italic", "bold", "underline"],
//         "D7": ["italic", "bold", "underline"],
//         "E7": ["italic", "bold", "underline"],
//         "F7": ["italic", "bold", "underline"],
//         "G7": ["italic", "bold", "underline"],
//         "C8": ["italic", "bold", "underline"],
//         "D8": ["italic", "bold", "underline"],
//         "E8": ["italic", "bold", "underline"],
//         "F8": ["italic", "bold", "underline"],
//         "G8": ["italic", "bold", "underline"]
//     },
//     "storageFontSize": {
//         "Y3": 18,
//         "Z3": 18,
//         "AA3": 18,
//         "AB3": 18,
//         "AC3": 18,
//         "AD3": 18,
//         "AE3": 18,
//         "Y4": 18,
//         "Z4": 18,
//         "AA4": 18,
//         "AB4": 18,
//         "AC4": 18,
//         "AD4": 18,
//         "AE4": 18,
//         "Y5": 18,
//         "Z5": 18,
//         "AA5": 18,
//         "AB5": 18,
//         "AC5": 18,
//         "AD5": 18,
//         "AE5": 18,
//         "Y6": 18,
//         "Z6": 18,
//         "AA6": 18,
//         "AB6": 18,
//         "AC6": 18,
//         "AD6": 18,
//         "AE6": 18,
//         "Y7": 18,
//         "Z7": 18,
//         "AA7": 18,
//         "AB7": 18,
//         "AC7": 18,
//         "AD7": 18,
//         "AE7": 18,
//         "Y8": 18,
//         "Z8": 18,
//         "AA8": 18,
//         "AB8": 18,
//         "AC8": 18,
//         "AD8": 18,
//         "AE8": 18
//     },
//     "storageFontColorBackground": {
//         "Y3": "#6f2a2a",
//         "Z3": "#6f2a2a",
//         "AA3": "#6f2a2a",
//         "AB3": "#6f2a2a",
//         "AC3": "#6f2a2a",
//         "AD3": "#6f2a2a",
//         "AE3": "#6f2a2a",
//         "Y4": "#6f2a2a",
//         "Z4": "#6f2a2a",
//         "AA4": "#6f2a2a",
//         "AB4": "#6f2a2a",
//         "AC4": "#6f2a2a",
//         "AD4": "#6f2a2a",
//         "AE4": "#6f2a2a",
//         "Y5": "#6f2a2a",
//         "Z5": "#6f2a2a",
//         "AA5": "#6f2a2a",
//         "AB5": "#6f2a2a",
//         "AC5": "#6f2a2a",
//         "AD5": "#6f2a2a",
//         "AE5": "#6f2a2a",
//         "Y6": "#6f2a2a",
//         "Z6": "#6f2a2a",
//         "AA6": "#6f2a2a",
//         "AB6": "#6f2a2a",
//         "AC6": "#6f2a2a",
//         "AD6": "#6f2a2a",
//         "AE6": "#6f2a2a",
//         "Y7": "#6f2a2a",
//         "Z7": "#6f2a2a",
//         "AA7": "#6f2a2a",
//         "AB7": "#6f2a2a",
//         "AC7": "#6f2a2a",
//         "AD7": "#6f2a2a",
//         "AE7": "#6f2a2a",
//         "Y8": "#6f2a2a",
//         "Z8": "#6f2a2a",
//         "AA8": "#6f2a2a",
//         "AB8": "#6f2a2a",
//         "AC8": "#6f2a2a",
//         "AD8": "#6f2a2a",
//         "AE8": "#6f2a2a",
//         "Y9": "#6f2a2a",
//         "Z9": "#6f2a2a",
//         "AA9": "#6f2a2a",
//         "AB9": "#6f2a2a",
//         "AC9": "#6f2a2a",
//         "AD9": "#6f2a2a",
//         "AE9": "#6f2a2a"
//     },
//     "storageTextAlign": {
//         "Y3": "flex-end",
//         "Z3": "flex-end",
//         "AA3": "flex-end",
//         "AB3": "flex-end",
//         "AC3": "flex-end",
//         "AD3": "flex-end",
//         "AE3": "flex-end",
//         "Y4": "flex-end",
//         "Z4": "flex-end",
//         "AA4": "flex-end",
//         "AB4": "flex-end",
//         "AC4": "flex-end",
//         "AD4": "flex-end",
//         "AE4": "flex-end",
//         "Y5": "flex-end",
//         "Z5": "flex-end",
//         "AA5": "flex-end",
//         "AB5": "flex-end",
//         "AC5": "flex-end",
//         "AD5": "flex-end",
//         "AE5": "flex-end",
//         "Y6": "flex-end",
//         "Z6": "flex-end",
//         "AA6": "flex-end",
//         "AB6": "flex-end",
//         "AC6": "flex-end",
//         "AD6": "flex-end",
//         "AE6": "flex-end",
//         "Y7": "flex-end",
//         "Z7": "flex-end",
//         "AA7": "flex-end",
//         "AB7": "flex-end",
//         "AC7": "flex-end",
//         "AD7": "flex-end",
//         "AE7": "flex-end",
//         "Y8": "flex-end",
//         "Z8": "flex-end",
//         "AA8": "flex-end",
//         "AB8": "flex-end",
//         "AC8": "flex-end",
//         "AD8": "flex-end",
//         "AE8": "flex-end",
//         "AG7": "flex-end"
//     },
//     "storageFontColorText": {
//         "Y3": "#ddd0d0",
//         "Z3": "#ddd0d0",
//         "AA3": "#ddd0d0",
//         "AB3": "#ddd0d0",
//         "AC3": "#ddd0d0",
//         "AD3": "#ddd0d0",
//         "AE3": "#ddd0d0",
//         "Y4": "#ddd0d0",
//         "Z4": "#ddd0d0",
//         "AA4": "#ddd0d0",
//         "AB4": "#ddd0d0",
//         "AC4": "#ddd0d0",
//         "AD4": "#ddd0d0",
//         "AE4": "#ddd0d0",
//         "Y5": "#ddd0d0",
//         "Z5": "#ddd0d0",
//         "AA5": "#ddd0d0",
//         "AB5": "#ddd0d0",
//         "AC5": "#ddd0d0",
//         "AD5": "#ddd0d0",
//         "AE5": "#ddd0d0",
//         "Y6": "#ddd0d0",
//         "Z6": "#ddd0d0",
//         "AA6": "#ddd0d0",
//         "AB6": "#ddd0d0",
//         "AC6": "#ddd0d0",
//         "AD6": "#ddd0d0",
//         "AE6": "#ddd0d0",
//         "Y7": "#ddd0d0",
//         "Z7": "#ddd0d0",
//         "AA7": "#ddd0d0",
//         "AB7": "#ddd0d0",
//         "AC7": "#ddd0d0",
//         "AD7": "#ddd0d0",
//         "AE7": "#ddd0d0",
//         "Y8": "#ddd0d0",
//         "Z8": "#ddd0d0",
//         "AA8": "#ddd0d0",
//         "AB8": "#ddd0d0",
//         "AC8": "#ddd0d0",
//         "AD8": "#ddd0d0",
//         "AE8": "#ddd0d0"
//     }
// }

export default state