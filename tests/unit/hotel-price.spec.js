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
})

describe('Hotel price', () => {
  it('renders the savings amount if exists', () => {
    hotel = storeModule.getters.listing(state)[1]
    wrapper = mount(HotelItem, {
      propsData: { hotel }
    })
    expect(wrapper.find('.hotel-price .savings').exists()).toBe(true)
  })

  it('displays the saving amount text if exists', () => {
    hotel = storeModule.getters.listing(state)[1]
    wrapper = mount(HotelItem, {
      propsData: { hotel }
    })
    expect(wrapper.find('.hotel-price .savings').text()).toBe('Save $28~')
  })

  it('hides the savings amount if it is null', () => {
    hotel = storeModule.getters.listing(state)[0]
    wrapper = mount(HotelItem, {
      propsData: { hotel }
    })
    expect(wrapper.find('.hotel-price .savings').exists()).toBe(false)
  })
})
