function showAnniversary() {
    const anniversaryDate = document.getElementById('anniversary').value;
    if (anniversaryDate) {
        alert('วันครบรอบของคุณ: ' + anniversaryDate);
    } else {
        alert('กรุณากรอกวันครบรอบ');
    }
}
