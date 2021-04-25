import { mount } from '@vue/test-utils'
import { TYPE_SELF, TYPE_STAR } from '@/enums/rating.js'
import Rating from '@/components/Hotel/Rating.vue'

describe('Hotel rating', () => {
  it('renders 4.5 self ratings correctly', () => {
    const type = TYPE_SELF
    const value = 4.5
    const wrapper = mount(Rating, {
      propsData: { type, value }
    })

    const html = '<div class="rating"><img src="/images/ratings/self-fill.svg" class="rating-img rating-self rating-fill"><img src="/images/ratings/self-fill.svg" class="rating-img rating-self rating-fill"><img src="/images/ratings/self-fill.svg" class="rating-img rating-self rating-fill"><img src="/images/ratings/self-fill.svg" class="rating-img rating-self rating-fill"><img src="/images/ratings/self-half.svg" class="rating-img rating-self rating-half"></div>'
    expect(wrapper.html()).toBe(html)
  })

  it('renders 3.5 star ratings correctly', () => {
    const type = TYPE_STAR
    const value = 3.5
    const wrapper = mount(Rating, {
      propsData: { type, value }
    })

    const html = '<div class="rating"><img src="/images/ratings/star-fill.svg" class="rating-img rating-star rating-fill"><img src="/images/ratings/star-fill.svg" class="rating-img rating-star rating-fill"><img src="/images/ratings/star-fill.svg" class="rating-img rating-star rating-fill"><img src="/images/ratings/star-half.svg" class="rating-img rating-star rating-half"><img src="/images/ratings/star-empty.svg" class="rating-img rating-star rating-empty"></div>'
    expect(wrapper.html()).toBe(html)
  })
})
