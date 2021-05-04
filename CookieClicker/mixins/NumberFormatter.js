import { Decimal } from 'decimal.js'

export default {
  methods: {
    toReadableForm: (decimalObj) => {
      if (decimalObj.comparedTo(new Decimal('1000000000000000000000')) >= 0) {
        return getRemainder(decimalObj, '1000000000000000000000') + ' sextillion'
      } else if (decimalObj.comparedTo(new Decimal('1000000000000000000')) >= 0) {
        return getRemainder(decimalObj, '1000000000000000000') + ' quintillion'
      } else if (decimalObj.comparedTo(new Decimal('1000000000000000')) >= 0) {
        return getRemainder(decimalObj, '1000000000000000') + ' quadrillion'
      } else if (decimalObj.comparedTo(new Decimal('1000000000000')) >= 0) {
        return getRemainder(decimalObj, '1000000000000') + ' trillion'
      } else if (decimalObj.comparedTo(new Decimal('1000000000')) >= 0) {
        return getRemainder(decimalObj, '1000000000') + ' billion'
      } else if (decimalObj.comparedTo(new Decimal('1000000')) >= 0) {
        return getRemainder(decimalObj, '1000000') + ' million'
      } else if (decimalObj.comparedTo(new Decimal('1000000')) < 0) {
        return decimalObj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }

      return decimalObj
    }
  }
}

function getRemainder (decimalObj, base) {
  return decimalObj.dividedBy(base).toFixed(2)
}
