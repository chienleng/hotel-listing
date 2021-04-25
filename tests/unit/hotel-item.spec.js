import { mount } from '@vue/test-utils'
import mockData from '../../public/api/data.json'
import { storeModule } from "../../src/store";
import { PRICE_HIGH_LOW } from '../../src/enums/order-by'
import dataProcess from '../../src/modules/data/process'
import HotelItem from '@/components/Hotel/Item.vue'

let state, hotel, wrapper

beforeEach(() => {
  state = {
    orderBy: PRICE_HIGH_LOW,
    hotels: dataProcess(mockData.results)
  }

  hotel = storeModule.getters.listing(state)[0]
  wrapper = mount(HotelItem, {
    propsData: { hotel }
  })
})

describe('Hotel item', () => {
  it('displays the promo title', () => {
    expect(wrapper.find('.hotel-image span').text()).toBe('Exclusive Deal')
  })

  it('displays the title', () => {
    expect(wrapper.find('.hotel-details h3').text()).toBe('PARKROYAL Darling Harbour Sydney')
  })

  it('displays the address', () => {
    expect(wrapper.find('.hotel-details .address').text()).toBe('150 Day Street, Sydney')
  })

  it('displays the room type', () => {
    expect(wrapper.find('.hotel-details .room').text()).toBe('Deluxe King')
  })

  it('displays the cancellation type', () => {
    expect(wrapper.find('.hotel-details .cancellation').text()).toBe('FREE_CANCELLATION')
  })

  it('displays the display price', () => {
    expect(wrapper.find('.hotel-price .display-price').html()).toContain('535')
  })
})
