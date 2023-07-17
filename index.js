
//openIcon, closeIcon, tabHidden, links, navFooter, mealContainer, rowData
// variabales
let openIcon = document.getElementById("openIcon");
let closeIcon = document.getElementById("closeIcon");

let navFooter = document.getElementById("navFooter");
let mealContainer = document.getElementById("mealContainer");
let rowData = document.getElementById("rowData");
let navtabs = document.getElementById("nav-tabs");
//search searchInputByFlitter searchInputByName
var searchInputByName = document.getElementById("searchInputByName");
var searchInputByFlitter = document.getElementById("searchInputByFlitter");
var rowDataMain = document.getElementById("rowDataMain");
 





/*

$(document).ready(function()
{
    $('#loading').slideUp(500,function()
    {
        $('body').css('overflow','auto')
        $('#loading').remove();
    })
   
})

openIcon.addEventListener("click",function(){
    navtabs.classList.replace("d-none","d-block");
    openIcon.classList.add("d-none");
    closeIcon.classList.replace("d-none","d-flex")


  });
closeIcon.addEventListener("click",function(){
    navtabs.classList.replace("d-block","d-none");
   openIcon.classList.replace("d-none","d-block");
    closeIcon.classList.add("d-none");

})
*/

openIcon.addEventListener("click", function ()
{
navtabs.classList.replace("d-none", "d-block");
});

closeIcon.addEventListener("click", function () 
{
navtabs.classList.replace("d-block", "d-none");

closeIcon.classList.add("d-none");

})

$(document).ready(function () 
{
  $('#loading').slideUp(500, function ()
    {
       $('body').css('overflow', 'auto');
       $('#loading').remove();
    });
    $('#openIcon').click(function () 
    {
       $('#closeIcon').removeClass('d-none').addClass('d-flex');
       $('#openIcon').removeClass('d-block').addClass('d-none');
       
    });

    $('#closeIcon').click(function ()
     {
    $('#openIcon').removeClass('d-none').addClass('d-block');
/*
    location.href = "search.html"
    location.href = "categories.html"
    location.href = "area.html"
    location.href = "ingredients.html"
    location.href = "contact.html"
*/
     });
});
/*
const links =document.querySelectorAll(".menu a");

  for(let i=0; i<links.length; i++)
  {
    links[i].addEventListener("click",function(){
    const category  =(links[i].getAttribute("data-category"));
    console.log(category);
    getMeal(category);
    }); 
  }*/
 



// https://www.themealdb.com/api/json/v1/1/categories.php


// `https://www.themealdb.com/api/json/v1/1/list.php?i=list

// https://www.themealdb.com/api/json/v1/1/list.php?${category}=list
 //meal
 var mealArr =[];
async function getMeal() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  const data = (await response.json()).categories;
  mealArr = data;
  displayMeal(data)
  console.log(data)
}

getMeal() 

function displayMeal(mealArr){
  let box=``;
   for (var i =0; i<mealArr.length; i++){
       box+=`
       <div class="col-md-3">
               <div onclick="getMealDetails('${mealArr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                   <img class="w-100" src="${mealArr[i].strMealThumb}" alt="" srcset="">
                   <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                       <h3>${mealArr[i].strMeal}</h3>
                   </div>
               </div>
       </div>
       `
   }
   document.getElementById("rowDataMain").innerHTML=box;
 }
 


//area
var mealsAreaArr= [];
async function getAreaMeal() {
  $(".inner-loading-screen").fadeIn(300)
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  const data = (await response.json()).meals;
  mealsAreaArr = data;
  displayArea(data)
  console.log(data)
  

}
getAreaMeal() 
function displayArea(mealsAreaArr){
  let box=``;
   for (var i =0; i<mealsAreaArr.length; i++){
       box+=`
       <div class="col-md-3">
          <div class="text-center p-2 rounded-2">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
             <h3>${mealsAreaArr[i].strArea}</h3>
          </div>  
       </div>
       `
   }
   document.getElementById("rowDataArea").innerHTML=box;
 }

//category
var mealCatArr= [];
async function getCatMeal() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  const data = (await response.json()).categories;
  mealCatArr = data;
  displaycategory(data)
  console.log(data)
}
getCatMeal() 
function displaycategory(mealCatArr){
  let box=``;
   for (var i =0; i<mealCatArr.length; i++){
       box+=`
       <div class="col-md-3">
          <div class="text-center p-2 rounded-2">
          
              <img src="${mealCatArr[i].strCategoryThumb}" class="w-100 carousel-pointer">
             <h3>${mealCatArr[i].strCategory}</h3>
          </div>  
       </div>
       `
   }
   document.getElementById("rowDataCat").innerHTML=box;
 }
 //ingradiantes
 
var mealIngArr=[];

 async function getIngMeal() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  const data = (await response.json()).meals;
  mealIngArr = data;
  displayIng(data)
  console.log(data)
}

 getIngMeal() 

function displayIng(mealIngArr){
  let box=``;
   for (var i =0; i<20; i++){
       box+=`
       <div class="col-md-3">
          <div class="text-center p-2 rounded-2 carousel-pointer">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
             <h3>${mealIngArr[i].strIngredient}</h3>
             <p>${mealIngArr[i].strDescription}</p>
          </div>  
       </div>
       `
   }
   document.getElementById("rowDataIng").innerHTML=box;
 }
 



 /*
function displayData(mealsArr){
  let box=``;
   for (var i =0; i<mealsArr.length; i++){
       box+=`
       <div class="col-md-3">
               <div onclick="getMealDetails('${mealsArr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                   <img class="w-100" src="${mealsArr[i].strMealThumb}" alt="" srcset="">
                   <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                       <h3>${mealsArr[i].strMeal}</h3>
                   </div>
               </div>
       </div>
       `
   }
   document.getElementById("rowData").innerHTML=box;
}
*/


// search 
//searchInputByName searchInputByFlitter 
/*
async function searchByName(cher) {
  
 
  $("#loading").fadeIn(300)

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cher}`)
  response = await response.json()*/
/*
  async function searchByFLetter(char) {
    
  
    $("#loading").fadeIn(300)

    char == "" ? char = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
    response = await response.json()

    $(".inner-loading-screen").fadeOut(300)

}

}*/
/*
function searchMeal()
{
   var searchKey = searchInputByName.value;
   console.log(searchInputByName.value)
   for( var i=0; i<mealCatArr.length; i++)
{
     if 
     (mealCatArr[i].strCategory.toLowerCase().includes(searchKey.toLowerCase())) 
     {
       displaycategory(mealCatArr);
     }

}
}
/*
 searchInputByName.addEventListener("input",function(){
   searchMeal()
 })*/
 //contact us
 // add product function
 let  nameInput = document.getElementById("nameInput");
 let  phoneInput = document.getElementById("phoneInput");
 let  ageInput = document.getElementById("ageInput");
 let  emailInput = document.getElementById("emailInput");
 let  passInput = document.getElementById("passInput");
 let  repasswordInput = document.getElementById("repasswordInput");
 let  submitBtn = document.getElementById("submitBtn");
 let itemInput = document.querySelector('input')
 let  userContainer =[];

 







$("#submitBtn").click(function(){
  addUser()
})

function diplayUsers()
{
   
    for (var i = 0; i < userContainer.length; i++)
    {
      console.log(userContainer[i]);
    }
    
   
}
function clear(){
 
  nameInput.value = "";
  phoneInput.value = "";
  ageInput.value = "";
  email.value = "";
  passInput.value ="";
  repasswordInput.value="";
}




function addUser() 
{
if (ValidateRepassword() == true &&  validateName()== true && validateAge()== true &&validatePhone()==true&&validatePassword()==true
&&ValidateEmail()==true) 
  {
        var user = 
        {

            name: nameInput.value,
            phone: phoneInput.value,
            age: ageInput.value,
            email: emailInput.value,
            password:passInput.value,
            repassword: repasswordInput.value
            
        }
        userContainer.push(user)
        localStorage.setItem("users", JSON.stringify(userContainer));
        diplayUsers(userContainer)
        clear();
  }
     else
    { 
      if(validateName()==false)
      {
        $(".alertName").removeClass("d-none").addClass("d-block");
      }
      if(validateAge()==false)
      {
        $(".alertAge").removeClass("d-none").addClass("d-block");

      }
      if(validatePhone()==false)
      {
        $(".alertPhone").removeClass("d-none").addClass("d-block");

      }
      if(validatePassword()==false)
      {
        $(".alertPass").removeClass("d-none").addClass("d-block");

      }
      if(ValidateRepassword()==false)
      {
        $(".alertRepass").removeClass("d-none").addClass("d-block");

      }
      if(ValidateEmail()==false)
      {
        $(".alertEmail").removeClass("d-none").addClass("d-block");

      }
      
      
    }

  }

   
    // console.log(productContainer);


 function validateName() {

  var regexName = /^[a-zA-Z\s]+$/;
  return regexName.test(document.getElementById("nameInput").value);
}
function ValidateEmail() {
  var regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexEmail.test(document.getElementById("emailInput").value);
}
function validatePhone() {

  var regexName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regexName.test(document.getElementById("phoneInput").value);
}

function validateAge() {

  var regexAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
  return regexAge.test(document.getElementById("ageInput").value);
}
function validatePassword() {

  var regexPass = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
  return regexPass.test(document.getElementById("passInput").value);
}
function ValidateRepassword() {
  return document.getElementById("repasswordInput").value == passInput.value
}


