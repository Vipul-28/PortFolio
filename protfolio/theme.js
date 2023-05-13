document.addEventListener("DOMContentLoaded",()=>{
    const themepreferencedark=  window.matchMedia("(prefers-color-scheme: dark)")
    const themeswithcer=document.getElementById("theme-switcher");
    const getodtheme=()=>
    {
  themepreferencedark.matches?"dark":"light";
    }
    const getlocalstoragetheme=()=>
    {
        return localStorage.getItem("theme");
    }
    const checkthemepreferrence=()=>
    {
        const defaulttheme=getodtheme();
        const currentheme=getlocalstoragetheme();
        if(currentheme=="dark")
        document.body.classList.toggle("dark-theme");
        else if(currentheme=="light")
        document.body.classList.toggle("light-theme");
      setbuttontext(currentheme??defaulttheme)
    }
    const setbuttontext=(theme)=>
    {
   themeswithcer.textContent=(theme=="dark")?"Light":"Dark";
    
    }
    const switchTheme=()=>
    {
        let theme;
        if(themepreferencedark.matches)
        {
        document.body.classList.toggle("light-theme");
       theme=document.body.classList.contains("light-theme")?"light":"dark";

        }
        else
        {
        document.body.classList.toggle("dark-theme");
       theme=document.body.classList.contains("dark-theme")?"dark":"light";

        }
        localStorage.setItem("theme",theme);
        setbuttontext(theme);

    }

    document.getElementById("theme-switcher").addEventListener("click",switchTheme);
    checkthemepreferrence();
})