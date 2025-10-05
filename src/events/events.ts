interface HeaderEvents extends CustomEvent {
    detail: {
        sectionName: string
    }
}

export const initEventHandlers = () => {
    document.addEventListener("setActiveHeaderLink", ((event: Event) => {
        const { detail } = event as HeaderEvents
        const section = detail.sectionName

        console.log("section", section)
        const links = document.querySelectorAll(".link") as NodeListOf<HTMLAnchorElement>
        links.forEach((link) => {
            const id = link.getAttribute("href")?.replace("#", "")
            if (id === section) {
                link.classList.add("active-link")
            } else {
                link.classList.remove("active-link")
            }
        })
    }) as EventListener)
}

export const setActiveHeaderLink = (sectionName: string) => {
    document.dispatchEvent(
        new CustomEvent("setActiveHeaderLink", {
            detail: {
                sectionName: sectionName,
            },
        }),
    )
}
