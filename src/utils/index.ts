export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pr-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
