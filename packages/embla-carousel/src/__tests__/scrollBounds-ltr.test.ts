import EmblaCarousel from '../components/EmblaCarousel'
import { mockTestElements } from './mocks'
import { SCROLL_BOUNDS_LTR_1 } from './fixtures/scrollBounds-ltr.fixture'
import { EngineType } from '../components/Engine'

export const setLocationOutOfBounds = (
  engine: EngineType,
  outOfBoundsLocation: number
): void => {
  engine.location.set(outOfBoundsLocation)
  engine.target.set(outOfBoundsLocation)
}

describe('➡️  ScrollBounds - Horizontal LTR', () => {
  describe('When the carousel is outside its bounds and its location is past the START bounds:', () => {
    test('It does NOT settle', () => {
      const emblaApi = EmblaCarousel(mockTestElements(SCROLL_BOUNDS_LTR_1))
      const engine = emblaApi.internalEngine()
      const settleCallback = jest.fn()

      emblaApi.on('settle', settleCallback)

      setLocationOutOfBounds(engine, engine.limit.max + 1)
      engine.animation.update()

      expect(settleCallback).toHaveBeenCalledTimes(0)
    })

    test('Target is set to equal the START bound', () => {
      const emblaApi = EmblaCarousel(mockTestElements(SCROLL_BOUNDS_LTR_1))
      const engine = emblaApi.internalEngine()

      setLocationOutOfBounds(engine, engine.limit.max + 1)
      engine.animation.update()

      expect(engine.target.get()).toBe(engine.limit.max)
    })
  })

  describe('When the carousel is outside its bounds and its location is past the END bounds:', () => {
    test('It does NOT settle', () => {
      const emblaApi = EmblaCarousel(mockTestElements(SCROLL_BOUNDS_LTR_1))
      const engine = emblaApi.internalEngine()
      const settleCallback = jest.fn()

      emblaApi.on('settle', settleCallback)

      setLocationOutOfBounds(engine, engine.limit.min - 1)
      engine.animation.update()

      expect(settleCallback).toHaveBeenCalledTimes(0)
    })

    test('Target is set to equal the END bound', () => {
      const emblaApi = EmblaCarousel(mockTestElements(SCROLL_BOUNDS_LTR_1))
      const engine = emblaApi.internalEngine()

      setLocationOutOfBounds(engine, engine.limit.min - 1)
      engine.animation.update()

      expect(engine.target.get()).toBe(engine.limit.min)
    })
  })
})
