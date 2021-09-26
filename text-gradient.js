const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(()=> {
    return function({addUtilities}){
        addUtilities({
            '.text-gradient':{'-webkit-text-fill-color' : 'transparent'},
        })
    }
})