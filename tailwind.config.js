const color = require("color")

module.exports = theme => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme

  return {
    content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
    safelist: [{ pattern: /^(text|border)-skill/ }],
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      extend: {
        colors: {
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
      },
    },
  }
}
