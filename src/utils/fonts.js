const amaticFont = new FontFace("AmaticSC", "url(/fonts/amatic-sc.woff2)")
amaticFont.family = "AmaticSC"

const ralewayFont = new FontFace("Raleway", "url(/fonts/raleway.woff2)")
ralewayFont.family = "Raleway"

Promise.all([amaticFont.load(), ralewayFont.load()]).then((loadedFonts) => {
    loadedFonts.forEach((font) => {
        document.fonts.add(font)
        console.log("Font loaded:", font.family)
    })
})
