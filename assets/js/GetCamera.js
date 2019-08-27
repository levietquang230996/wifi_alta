const video1 = document.querySelector('video');
if(window.location.pathname==='/pages/takephoto.html'){
    init();
}
// ket noi camera nguoi dung
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });
        window.stream = stream;
        video1.srcObject = stream;
    } catch (e) {
        console.log(e)
    }
}

let canvas ;
let context ;
let img;

// Trigger photo take
$("#btn_camera").on("click", function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = $('#video_camera').width();
    canvas.height = $('#video_camera').height();
    console.log(canvas.width)
    console.log(window.location)
    // context.drawImage(video1, -55, 0, canvas.width + 109, canvas.height);
    context.drawImage(video1, -65, 0, canvas.width + 131, canvas.height);
    $('#btn_camera').addClass('d-none');
    $('#btn_camera')[0].nextElementSibling.className = 'icon-checked cursor_pointer';

});

// Trigger photo take
$("#btn_check").on("click", function () {
    var image = canvas.toDataURL();
    // console.log(image)
    fetch(image)
        .then(res => res.blob())
        .then(blob => {
            var fd = new FormData()
            fd.append('image', blob, 'filename')
           console.log(fd.get('image'))
            console.log(blob)
            window.history.back();
            // window.location.href = window.location.origin + '/pages/register.html';
            // Upload
            // fetch('upload', {method: 'POST', body: fd})
        })
});


// tro ve trang index
$('#btn_back').on('click', function () {
    // window.location.href = window.location.origin + '/pages/index.html';
})

// dang ky nguoi dung
$('#btn_done').on('click', function () {
   $('.bg_opp').toggleClass('d-flex').toggleClass('d-none');
})

// chuyen sang trang camera
$('.go_to_camera').on('click', function () {
    // window.location.href = window.location.origin + '/pages/takephoto.html';
    init();
})

// chuyen sang trang camera
$('.modal_box .fa-times').on('click', function () {
    // alert(1)
    // $('.bg_opp').toggleClass('d-none').toggleClass('d-flex');
})

// chuyen sang trang camera
$('.bg_opp').on('click', function () {
    $('.bg_opp').toggleClass('d-none').toggleClass('d-flex');
})
