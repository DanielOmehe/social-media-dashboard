const switchTheme = document.querySelector('.switch');

switchTheme.addEventListener('click', ()=>toggleTheme())

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute("data-theme", theme);
}

const toggleTheme = () => {
    if(localStorage.getItem('theme') === 'dark'){
        setTheme("light")
    }else{
        setTheme("dark")
    }
}

(function(){
    if(localStorage.getItem('theme') === 'dark'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
})();