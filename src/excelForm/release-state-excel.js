
import { toThousandFilter } from '@/filters'

// 입고현황조회 검색자료 상품별 엑셀 헤더 포맷
export const rlsProductGroupByHeaderFormat = `
<style>
.xl24{mso-number-format:"\@";}
td { font-size:10pt; text-align: center; }
.title { FONT-SIZE: 10pt; COLOR: #808080; font-family:굴림체,sans-serif; font-weight:bold; margin:0; padding-bottom:0; }
</style>

<table border="1" cellPadding="0" cellspacing="0">
  <tr align="center" height="40" style="color:#ffffff">
    <td colspan="15" class="title" style="text-align: left;">&nbsp;F재고관리 >【7】출고현황조회 > 검색자료</td>
  </tr>
  <tr align="center" height="40" style="color:#ffffff;font-weight:bold;font-size: 10pt">
    <td bgcolor="#993300">상품코드</td>
    <td bgcolor="#993300">건수</td>
    <td bgcolor="#993300">상품명</td>
    <td bgcolor="#993300">자체상품코드</td>
    <td bgcolor="#993300">상품약어</td>
    <td bgcolor="#993300" nowrap>옵션상세명칭</td>
    <td bgcolor="#993300">정상</td>
    <td bgcolor="#993300">반품</td>
    <td bgcolor="#993300">교환</td>
    <td bgcolor="#993300">이동</td>
    <td bgcolor="#993300">조정</td>
    <td bgcolor="#993300">기타</td>
    <td bgcolor="#993300">합계</td>
    <td bgcolor="#993300">원가</td>
    <td bgcolor="#993300">원가합계</td>
  </tr>
</table>`

// 입고현황조회 검색자료 상품별 엑셀 JSON 양식
export const rlsProductGroupByJsonFields = (excelForm) => {
  return {
    상품코드: {
      field: 'prdNo',
      field2: 'skuNo',
      callback: (value, value2) => {
        return value + '-' + value2
      }
    },
    건수: 'stocSrnoCount',
    상품명: {
      field: 'prdNm',
      callback: (value) => {
        return `<p style="text-align: left;">${value}</p>`
      }
    },
    자체상품코드: {
      field: 'onsfPrdCd',
      callback: (value) => {
        return `<p style="text-align: left;">${value}</p>`
      }
    },
    상품약어: {
      field: 'prdAbbrRmrk',
      callback: (value) => {
        return `<p style="text-align: left;">${value}</p>`
      }
    },
    옵션상세명칭: {
      field: 'optDtlNm',
      callback: (value) => {
        return `<p style="text-align: left;">${value}</p>`
      }
    },
    정상: {
      field: 'normalRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    반품: {
      field: 'returnRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    교환: {
      field: 'exchangeRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    이동: {
      field: 'moveRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    조정: {
      field: 'adjustmentRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    기타: {
      field: 'etcRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    합계: {
      field: 'rls' + excelForm.stocQtType + 'Count',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    원가: {
      field: 'splyCprc',
      callback: (value) => {
        return `<p style="text-align: right; color: #cc317f;">${toThousandFilter(value)}</p>`
      }
    },
    원가합계: {
      field: 'rls' + excelForm.stocQtType + 'Cprc',
      callback: (value) => {
        return `<p style="text-align: right; color: #996600; font-weight: bold;">${toThousandFilter(value)}</p>`
      }
    }
  }
}

// 입고현황조회 검색자료 전표별 엑셀 헤더 포맷
export const rlsChitGroupByHeaderFormat = `
<style>
.xl24{mso-number-format:"\@";}
td { font-size:10pt; text-align: center; }
.title { font-size: 10pt; color: #808080; font-family:굴림체,sans-serif; font-weight:bold; margin: 0; padding-bottom:0; }
</style>
<table border="1" cellPadding="0" cellspacing="0">
  <tr align="center" height="40" style="color:#ffffff">
    <td colspan="12" class="title" style="text-align: left;">&nbsp;F재고관리 >【7】출고현황조회 > 검색자료</td>
  </tr>
  <tr align="center" height="40" style="color:#ffffff;font-weight:bold;font-size: 10pt">
    <td bgcolor="#993300">No</td>
    <td bgcolor="#993300">창고</td>
    <td bgcolor="#993300">전표번호</td>
    <td bgcolor="#993300">매입처</td>
    <td bgcolor="#993300">정상</td>
    <td bgcolor="#993300">반품</td>
    <td bgcolor="#993300">교환</td>
    <td bgcolor="#993300">이동</td>
    <td bgcolor="#993300">조정</td>
    <td bgcolor="#993300">기타</td>
    <td bgcolor="#993300">합계</td>
    <td bgcolor="#993300">원가합계</td>
  </tr>
</table>`

// 입고현황조회 검색자료 전표별 엑셀 JSON 양식
export const rlsChitGroupByJsonFields = (excelForm) => {
  return {
    No: 'rowNum',
    창고: 'wrhsNm',
    전표번호: 'chitNo',
    매입처: 'bypcSvcAcntNm',
    정상: {
      field: 'normalRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    반품: {
      field: 'returnRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    교환: {
      field: 'exchangeRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    이동: {
      field: 'moveRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    조정: {
      field: 'adjustmentRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    기타: {
      field: 'etcRls' + excelForm.stocQtType + 'Qt',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    합계: {
      field: 'rls' + excelForm.stocQtType + 'Count',
      callback: (value) => {
        return `<p style="text-align: right;">${toThousandFilter(value)}</p>`
      }
    },
    원가합계: {
      field: 'rls' + excelForm.stocQtType + 'Cprc',
      callback: (value) => {
        return `<p style="text-align: right; color: #996600; font-weight: bold;">${toThousandFilter(value)}</p>`
      }
    }
  }
}
