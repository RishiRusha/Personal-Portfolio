console.log('Running Script')
document.querySelector('.cross').style.display ='none';
document.querySelector('.line').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})