import { setActiveHeaderLink } from "../events/events.ts"
import { SECTIONS } from "./constants.ts"

export const useIntersections = () => {
    const sectionElements = Object.values(SECTIONS)
        .map((sectionId) => document.querySelector(`#${sectionId}`))
        .filter(Boolean) as HTMLElement[]

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id
                setActiveHeaderLink(sectionId)
            }
        })
    }

    // Create observers with different thresholds for different section sizes
    const createObserverForElement = (element: HTMLElement) => {
        const elementHeight = element.offsetHeight
        const viewportHeight = window.innerHeight

        // For very tall sections (larger than viewport), use a lower threshold
        const threshold = elementHeight > viewportHeight * 1.5 ? 0.1 : 0.75

        const observer = new IntersectionObserver(callback, {
            threshold: threshold,
        })

        observer.observe(element)
        return observer
    }

    // Wait for layout to be complete before measuring heights
    setTimeout(() => {
        sectionElements.forEach((element) => {
            createObserverForElement(element)
        })
    }, 100)
}
