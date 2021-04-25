import mockData from '../../public/api/data.json'
import { storeModule } from "../../src/store";
import { PRICE_HIGH_LOW, PRICE_LOW_HIGH } from '../../src/enums/order-by'
import dataProcess from '../../src/modules/data/process'

let state

beforeEach(() => {
  state = {
    orderBy: PRICE_HIGH_LOW,
    hotels: dataProcess(mockData.results)
  }
})

describe('Listing getter', () => {
  it('returns listing from price (high-low) ', async () => {
    state.orderBy = PRICE_HIGH_LOW

    const listing = storeModule.getters.listing(state)
    const firstItem = listing[0]
    const lastItem = listing[listing.length - 1]

    expect(firstItem.offer.displayPrice.amount).toBe(535)
    expect(lastItem.offer.displayPrice.amount).toBe(227)
  })
  it('returns listing from price (low-high) ', async () => {
    state.orderBy = PRICE_LOW_HIGH

    const listing = storeModule.getters.listing(state)
    const firstItem = listing[0]
    const lastItem = listing[listing.length - 1]

    expect(firstItem.offer.displayPrice.amount).toBe(227)
    expect(lastItem.offer.displayPrice.amount).toBe(535)
  })
})
