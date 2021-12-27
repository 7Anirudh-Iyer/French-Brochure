document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Interlaken.png')"

function changeImage(){
    let img1 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Interlaken.png"
    let img2 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Jungfraujoch.png"
    let img3 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lake Geneva.png"
    let img4 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lucerne.png"
    let img5 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Matterhorn.png"
    
    let div = document.querySelector('#sliding-images')
    const style = window.getComputedStyle(div, false)  
    let currentImage = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    if(currentImage === img1){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Jungfraujoch.png')"
    } else if(currentImage === img2){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lake Geneva.png')"
    } else if(currentImage === img3){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lucerne.png')"
    } else if(currentImage === img4){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Matterhorn.png')"
    } else if(currentImage === img5){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Interlaken.png')"
    }
}

document.getElementById('next').onclick = function(){
    changeImage()
}

document.getElementById('previous').onclick = function(){
    let img1 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Interlaken.png"
    let img2 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Jungfraujoch.png"
    let img3 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lake Geneva.png"
    let img4 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lucerne.png"
    let img5 = "file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Matterhorn.png"
    
    let div = document.querySelector('#sliding-images')
    const style = window.getComputedStyle(div, false)  
    let currentImage = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    if(currentImage === img1){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Matterhorn.png')"
    } else if(currentImage === img2){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Interlaken.png')"
    } else if(currentImage === img3){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Jungfraujoch.png')"
    } else if(currentImage === img4){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lake Geneva.png')"
    } else if(currentImage === img5){
        document.getElementById('sliding-images').style.backgroundImage = "url('file:///E:/AnirudhIyer/Important/French-Brochure-For-Switzerland/Images/Lucerne.png')"
    }
}

let mi = setInterval(changeImage, 10000)