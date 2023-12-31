import Splide from "https://cdn.skypack.dev/@splidejs/splide@2.4.21"
import Grid from "https://cdn.skypack.dev/@splidejs/splide-extension-grid@0.2.0"

new Splide('#example-grid', {
    type: 'loop', // スライダーの種類 @type: { string }, default: 'slide'
    height: '13rem', // スライダーの高さ @type: { number }, default: ０
    gap: '1em', // スライド間のギャップサイズ @type: { number|string }, default: ０
    perPage: 4, // 1ページに表示するスライドの数 @type: { number }, default: ０
    perMove: 1, // スライダーが移動するスライドの数 @type: { number }, default: ０
    grid: {
        dimensions: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]], // 配列としてのディメンション（行と列）のコレクション @type: { Array|boolean }, default: false
        gap: { // オブジェクトとしての行と列のギャップサイズ @type: { Object }, default: {}
            row: '1em', // 行の数 @type: { number }, default: 1
            col: '1em' // 列の数 @type: { number }, default: 1
        }
    },
    breakpoints: {  // ブレークポイントの定義
        1000: {
            height: '10rem',
            perPage: 2,
            grid: {
                dimensions: [[1, 1], [1, 1], [1, 1], [1, 1]],
                gap: {
                }
            }
        }
    }
}).mount({ Grid })



// new Splide('#splidePortfolio', {
//     type: 'loop', // スライダーの種類 @type: { string }, default: 'slide'
//     height: '50rem', // スライダーの高さ @type: { number }, default: ０
//     gap: '1em', // スライド間のギャップサイズ @type: { number|string }, default: ０
//     perPage: 3, // 1ページに表示するスライドの数 @type: { number }, default: ０
//     perMove: 1, // スライダーが移動するスライドの数 @type: { number }, default: ０
//     grid: {
//         dimensions: [[2, 2], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]], // 配列としてのディメンション（行と列）のコレクション @type: { Array|boolean }, default: false
//         gap: { // オブジェクトとしての行と列のギャップサイズ @type: { Object }, default: {}
//             row: '1em', // 行の数 @type: { number }, default: 1
//             col: '1em' // 列の数 @type: { number }, default: 1
//         }
//     },
//     breakpoints: {  // ブレークポイントの定義
//         1000: {
//             height: '10rem',
//             perPage: 2,
//             grid: {
//                 dimensions: [[1, 1], [1, 1], [1, 1], [1, 1]],
//                 gap: {
//                 }
//             }
//         }
//     }
// }).mount({ Grid })
