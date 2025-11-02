import { useIntersectionObserver } from "./useIntersectionObserver"

// Animation with staggered delays
export const useAnimations = () => {
    const revealElements = Array.from(document.querySelectorAll(".reveal")) as HTMLElement[]

    if (revealElements.length === 0) {
        return
    }

    const handleIntersect = (element: HTMLElement) => {
        // Get the stagger delay from data-attribute or use default
        const delay = element.dataset.delay ? Number.parseInt(element.dataset.delay, 10) : 0

        setTimeout(() => {
            element.classList.add("visible")
        }, delay)
    }

    useIntersectionObserver(revealElements, handleIntersect)
}
