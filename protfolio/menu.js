document.addEventListener("DOMContentLoaded",function()
{
document.getElementById("menu").addEventListener("click",callMenu);
document.getElementById("newbutton").addEventListener("click",closeMenu);
function callMenu()
{
    document.querySelector("#menus").style.height="100%";
}
function closeMenu()
{
    document.querySelector("#menus").style.height="0";
}
function addClickToMenuItems()
{
    const menulists=document.querySelectorAll("nav#menus ul >li");
    for(let menulist of menulists)
    {
        menulist.addEventListener("click",closeMenu)
    }
}
addClickToMenuItems();
})