class ImageInfo {
    $imageInfo = null;
    data = null;
  
    constructor({ $target, data }) {
      const $imageInfo = document.createElement("div");
      $imageInfo.className = "ImageInfo";
      this.$imageInfo = $imageInfo;
      $target.appendChild($imageInfo);
  
      this.data = data;
  
      this.render();
  
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      
      if (this.data.visible) {
        const { name, url, temperament, origin,id } = this.data.image;
        this.$imageInfo.innerHTML = `
          <section class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </section>`;
        this.$imageInfo.style.display = "block";
  
        //모달 X 클릭 시
        const close = document.querySelector('.close')
        const modal = document.querySelector('.ImageInfo')
        const body_all = document.querySelector('#App')
        close.onclick = () =>{
          modal.style.display = 'none';
        }
        //ESC 키보드 입력시
        window.onkeyup = function(e){
          let key = e.keyCode? e.keyCode:e.which;
  
          if(key ===27){
            modal.style.display = 'none';
          }
        }
        
      } else {
        this.$imageInfo.style.display = "none";
      }
  
    }
  }
  