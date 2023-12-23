const register=document.querySelector('.form');
const login=document.querySelector('.login');
const join=document.querySelector('.join')
const both_forms=document.querySelector('.both_forms');

join.addEventListener('active',()=>{
    both_forms.classList.add('active');
});
