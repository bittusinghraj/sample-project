const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtns=filterBtns.length,
      portfolioItems=document.querySelectorAll('.portfolio-item');
    //   console.log(portfolioItems);
      totalPortfolioItem=portfolioItems.length;
    //   console.log(totalPortfolioItem);



      for(let i=0; i<totalFilterBtns;i++){
          filterBtns[i].addEventListener('click',function(){
              filterContainer.querySelector('.active').classList.remove('active')
              this.classList.add('active')

              const filterValue= this.getAttribute('data-filter');
            //   console.log(filterValue);
              for(let i = 0 ; i<totalPortfolioItem;i++){
                  if(filterValue===portfolioItems[i].getAttribute('data-category')){
                      portfolioItems[i].classList.add('show')
                      portfolioItems[i].classList.remove('hide')
                  }
                  else{
                    portfolioItems[i].classList.add('hide')
                    portfolioItems[i].classList.remove('show')
                  }
                  if(filterValue==="all"){
                    portfolioItems[i].classList.add('show')
                    portfolioItems[i].classList.remove('hide')
                  }
              }
          })
          
      }



// lightBox########################################################

const lightbox = document.querySelector('.lightbox'),
      lightboximg=lightbox.querySelector('.lightbox-img'),
      lightboxtext=lightbox.querySelector('.caption-text'),
      lightboxClose=lightbox.querySelector('.lightbox-close'),
      lightboxCounter=lightbox.querySelector('.caption-counter');
      let itemIndex=0;

      for(let i =0; i<totalPortfolioItem;i++){
          portfolioItems[i].addEventListener('click',function(){
              itemIndex=i;
              changeItem();
              toggleLightBox();
          })
      }

      function nextItem(){
          if(itemIndex==totalPortfolioItem-1){
              itemIndex=0;
          }
          else{
              itemIndex++;
          }
          changeItem();
      }
      function prevItem(){
          if(itemIndex==0){
            itemIndex=totalPortfolioItem-1;
          }
          else{
              itemIndex--;
          }
          changeItem();
      }


      function toggleLightBox(){
          lightbox.classList.toggle('open')
      }

      function changeItem(){
          imgSrc=portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
          lightboximg.src=imgSrc;
          lightboxtext.innerHTML=portfolioItems[itemIndex].querySelector('h4').innerHTML;
          lightboxCounter.innerHTML=(itemIndex+1)+ " of " + totalPortfolioItem;
      }

      lightbox.addEventListener('click',function(e){
          if(e.target=== lightboxClose || e.target===lightbox){
            toggleLightBox();
          }
      })

// Nav list items########################################################
    const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    section=document.querySelectorAll(".section");
    for (let i = 0; i < navlist.length; i++) {
        // console.log(navlist[i]);
        const a = navlist[i].querySelector("a")
        a.addEventListener("click",function(){
            for (let i = 0; i < section.length; i++) {
                section[i].classList.remove("back-section")
                
            }
            for (let j = 0; j < navlist.length; j++) {
                if(navlist[j].querySelector("a").classList.contains("active")){
                    section[j].classList.add("back-section")
                }
                navlist[j].querySelector("a").classList.remove("active")
                
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
        })
        
    }
    function showSection(element){
        for (let i = 0; i < section.length; i++) {
           section[i].classList.remove("active")
            
        }
        const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
        
    }

    const navToggleBtn= document.querySelector(".nav-toggle"),
    aside = document.querySelector(".aside");
    navToggleBtn.addEventListener("click",function(){
        asideSectionTogglerBtn();
        
    })
    function asideSectionTogglerBtn() {
        aside.classList.toggle("open")
        navToggleBtn.classList.toggle("open")
        // section.classList.toggle("open")
        for (let i = 0; i < section.length; i++) {
            
            section[i].classList.toggle("open")
        }
    }