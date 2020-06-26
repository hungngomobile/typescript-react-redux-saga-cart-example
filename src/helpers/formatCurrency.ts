const intl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export default function formatCurrency(price: number): string {
  return intl.format(price)
}
