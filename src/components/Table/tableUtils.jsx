import { formatBytes } from './../../utils';

/**
 * 
 * @param {T} a same type with `b`
 * @param {T} b same type with `a`
 * @param {V} orderBy a object { name: string, type: 'number'|'date'|'string' }
 * @returns {boolean} comparison result
 */
function descendingComparator(a, b, orderBy) {
  const [valueA, valueB] = [a[orderBy.name], b[orderBy.name]].map(
    (item) => {
      if (orderBy.type !== 'number') {
        return String(item).toLowerCase();
      }
      return item;
    }
  );

  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
}

/**
 * 
 * @param {string} order order type of 'desc' or 'asc'
 * @param {string} orderBy argument based on what the table be sorted by to deliver descendingComparator function
 * @returns {<T>(a: T, b: T) => boolean} comparison function
 */
export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

/*
  This method is created for cross-browser compatibility, if you don't
  need to support IE11, you can use Array.prototype.sort() directly:
*/
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }


/**
 * Generate Row from data
 * ```
 * interface Row {
 *   id: number,
 *   name: string,
 *   date: string,
 *   size: number,
 *   train: number,
 *   nontrain: number,
 *   optimizer: string,
 *   loss: string,
 *   lr: number
 * }
 * ```
 * @param {Partial<Row>} row 
 * @param {number} idx 
 * @returns {Row}
 */
export const tableRowMappingGenerator = (row, idx) => ({
  ...row,
  name: row?.name || '',
  date: row?.date || '',
  size: row?.size || 0,
  variation: row?.variation || '',
  round: row?.round || 0,
  description: row?.description || '',
  train: row?.train || 0,
  nontrain: row?.nontrain || 0,
  optimizer: row?.optimizer || 0,
  loss: row?.loss || 0,
  lr: row?.lr || 0,
});

/**
 * 칼럼 변경 시 아래 배열에 추가/수정.
 * 칼럼들의 name 속성 값에 따라 위 tableRowMappingGenerator의 오브젝트 구조 변경.
 * ```
 * interface HeadData {
 *  name: string,
 *  numeric: boolean,
 *  type: 'string' | 'number' | 'date',
 *  disablePadding: boolean,
 *  label: string,
 *  width: string,
 *  makeTitleAttr?: (value): HeadData['type'] => string,
 *  valueFormatter?: (value): HeadData['type'] => string,
 * }
 * ```
 * @type {HeadData[]}
 */
export const historyDataHeadRow = [
  {
    name: 'name',
    numeric: false,
    type: 'string',
    disablePadding: false,
    label: 'File name',
    width: 'minmax(160px, auto)',
  },
  {
    name: 'date',
    numeric: false,
    type: 'date',
    disablePadding: false,
    label: 'Update at',
    width: '140px',
  },
  {
    name: 'size',
    numeric: false,
    type: 'number',
    disablePadding: false,
    label: 'Size',
    width: '140px',
    makeTitleAttr: (value) => `${new Intl.NumberFormat('ko').format(value)} (byte)`,
    valueFormatter: (value) => formatBytes(value, 0),
  },
  {
    name: 'variation',
    numeric: false,
    type: 'string',
    disablePadding: false,
    label: 'Version',
    width: '160px',
  },
  {
    name: 'round',
    numeric: false,
    type: 'number',
    disablePadding: false,
    label: 'Round',
    width: '140px',
  },
  {
    name: 'description',
    numeric: false,
    type: 'string',
    disablePadding: false,
    label: 'Description',
    width: '200px',
  },
  {
    name: 'train',
    numeric: false,
    type: 'number',
    disablePadding: false,
    label: 'Trainable Params',
    width: '200px',
  },
  {
    name: 'nontrain',
    numeric: false,
    type: 'number',
    disablePadding: false,
    label: 'Non-trainable Params',
    width: '200px',
  },
  {
    name: 'optimizer',
    numeric: false,
    type: 'string',
    disablePadding: false,
    label: 'Optimizer',
    width: '300px',
    makeTitleAttr: (value) => `${value}`,
  },
  {
    name: 'loss',
    numeric: false,
    type: 'string',
    disablePadding: false,
    label: 'Loss function',
    width: '240px',
  },
  {
    name: 'lr',
    numeric: false,
    type: 'number',
    disablePadding: false,
    label: 'Learning rate',
    width: '200px',
  },
]

/**
 * [EX] 모델별 컬럼 데이터 일괄 적용 매퍼
 * 대상 칼럼: Total params(totalparmas), Trainable params(trainable), Non-trainable params(nontrainable), Optimizer(optimizer), Loss function(lossfn) 
 * 사용 예시: TABLE_ROWS.map(_addColumnsMapper)
 */
// export const _addColumnsMapper = (row) => ({
//   "totalparams": "",
//   "trainable": "",
//   "nontrainable": "",
//   "optimizer": "",
//   "lossfn": "",
//   ...row
// })

export const genGridTemplateColumns = (headCells) => ['48px'].concat(headCells.map(option => (option?.width !== undefined) ? `${option.width}` : 'auto')).join(' ');

