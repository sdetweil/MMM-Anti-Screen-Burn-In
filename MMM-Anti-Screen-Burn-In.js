Module.register("MMM-Anti-Screen-Burn-In", {
start: function(){
    setInterval(() => {
        document.querySelector("body").classList.toggle("MMM-Anti-Screen-Burn-In");
    }, 6 * 60 * 60 * 1000); // every 6 hours
},

getStyles: function(){
    return ["MMM-Anti-Screen-Burn-In.css"];
},
getDom: function(){
  var wrapper = document.createElement("div");
  return wrapper
}
})