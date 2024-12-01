const btn = document.querySelector('.btn')
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty("--x", x + 'px');
    btn.style.setProperty("--y", y + 'px');
    console.log('X:'+ e.pageX)
    console.log('Y:'+ e.pageY)
    console.log('offset left X:'+ btn.offsetLeft)
    console.log('offset top Y:'+ btn.offsetTop)
}



//pageX và pageY Tọa độ của con trỏ chuột 
// X tăng dần khi qua phải
// Y tăng dần khi đi xuống
// offsetLeft  offsetTop: luôn là số cố định (không có offsetRight và Bottom)
// Thuộc tính này cho biết khoảng cách của phần tử bạn chọn 
// với phần tử cha của nó nó tính về phía trái (bên trên), 
// Khi di chuyển chuột vào trong thì
// tọa độ e.pageX luôn lớn hơn btn.offsetLeft
// tọa độ e.pageY luôn lớn hơn btn.offsetTop
// Sau khi trừ hiệu số 2 tọa độ thì gán lại cho 2 property của button
