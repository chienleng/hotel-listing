import { mount } from '@vue/test-utils'
import mockData from '../../public/api/data.json'
import { storeModule } from "../../src/store";
import { PRICE_HIGH_LOW } from '../../src/enums/order-by'
import dataProcess from '../../src/modules/data/process'
import HotelPrice from '@/components/Hotel/Price.vue'

let state, hotel, wrapper

beforeEach(() => {
  state = {
    orderBy: PRICE_HIGH_LOW,
    hotels: dataProcess(mockData.results)
  }
})

function componentMount(h) {
  return mount(HotelPrice, {
    propsData: {
      price: h.offer.displayPrice.amount,
      priceCurrency: h.offer.displayPrice.currency,
      savings: h.offer.savings.amount,
      savingsCurrency: h.offer.savings.currency
    }
  })
}

describe('Hotel price', () => {
  it('renders the savings amount if exists', () => {
    hotel = storeModule.getters.listing(state)[1]
    wrapper = componentMount(hotel)
    expect(wrapper.find('.hotel-price .savings').exists()).toBe(true)
  })

  it('displays the saving amount text if exists', () => {
    hotel = storeModule.getters.listing(state)[1]
    wrapper = componentMount(hotel)
    expect(wrapper.find('.hotel-price .savings').text()).toBe('Save $28~')
  })

  it('hides the savings amount if it is null', () => {
    hotel = storeModule.getters.listing(state)[0]
    wrapper = componentMount(hotel)
    expect(wrapper.find('.hotel-price .savings').exists()).toBe(false)
  })
})
