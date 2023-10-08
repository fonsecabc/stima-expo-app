export type Order = {
    id: string
    status: string
    charges: object[]
    pixQrCode?: string
    pixPaymentLink?: string
}
