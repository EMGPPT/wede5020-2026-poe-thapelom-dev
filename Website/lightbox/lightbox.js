export default class lightbox { 
    static activate(){
        document.body.insertAdjacentHTML('beforeend', `
            <div class="lightbox" id ="lightbox"style="display:none;">
                <div class="lightbox__inner">
                    <button type ="button" class="lightbox__close" >
                    &times;
                    </button>
                    <div class="lightbox__content">
                      
                    </div>
                </div>
            </div>
            `);
            const lightbox = document.querySelector('#lightbox');
            const btnClose = lightbox.querySelector('.lightbox__close');
            const content = lightbox.querySelector('.lightbox__content');
            const closeLightbox = () => {
                lightbox.style.display="none";
                content.innerHTML ="";
                };

                lightbox.addlistener("mousedown", (e)=>{
                    if(e.target.matches('#lightbox')){
                        closeLightbox();
                    }
                });

                btnClose.addEventlistener("click", ()=>{
                    closeLightbox();
                });
        }
    }; 
