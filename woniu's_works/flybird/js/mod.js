var mod = {
    modTimer: null,
    moveTimer: null,
    div: document.createElement('div'),
    mod_div: document.createElement('div'),
    pipe_div: document.createElement('div'),
    showMod: function (parentObj) {
        this.modTimer = setInterval(makeMod, 5000)
        function makeMod () {
            var modHei = Math.floor(Math.random()*100 + 50)
            var divHei = modHei + 50
            mod.div.style.width = '75px'
            mod.div.style.height = divHei + "px"
            mod.div.style.left = '250px'
            mod.div.style.position = 'absolute'
            
            mod.mod_div.style.height = modHei + "px"
            mod.mod_div.style.position = 'absolute'
            mod.mod_div.style.backgroundImage = 'url(img/up_mod.png)'
            mod.mod_div.style.backgroundRepeat = 'repeat-y'
            mod.mod_div.style.width = '60px'

            mod.pipe_div.style.position = 'absolute'
            mod.pipe_div.style.height = '50px'
            mod.pipe_div.style.width = '65px'
            mod.pipe_div.style.bottom = '0px'
            mod.pipe_div.style.backgroundImage = 'url(img/up_pipe.png)'
            mod.pipe_div.style.backgroundRepeat = 'no-repeat'
            
            mod.div.appendChild(mod.mod_div)
            mod.div.appendChild(mod.pipe_div)
            parentObj.appendChild(mod.div)
        }
        
    }
}