export const useIntersectionObserver = (
    elements: HTMLElement[],
    onIntersect: (element: HTMLElement) => void,
) => {
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                onIntersect(entry.target as HTMLElement)
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(callback, {
        threshold: 0.2,
    })

    elements.forEach((element) => {
        observer.observe(element)
    })
}
