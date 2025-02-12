function showAnniversary() {
    const anniversaryDate = document.getElementById('anniversary').value;
    if (anniversaryDate) {
        alert('วันครบรอบของคุณ: ' + anniversaryDate);
    } else {
        alert('กรุณากรอกวันครบรอบ');
    }
}

window.onscroll = function () {
    let button = document.querySelector(".back-to-top");
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded! ✅");

    // หาหัวข้อทั้งหมดที่เป็น <h3>
    let topics = document.querySelectorAll(".content h3");
    let menuContainer = document.getElementById("menu-container");

    // วนลูปสร้างปุ่มตามจำนวน <h3>
    topics.forEach((topic, index) => {
        let button = document.createElement("button");
        button.innerText = topic.innerText; // ตั้งชื่อปุ่มให้ตรงกับหัวข้อ
        button.classList.add("menu-button");

        // กำหนดให้ปุ่มกดแล้วแสดง/ซ่อนเนื้อหา
        button.addEventListener("click", function () {
            let content = topic.closest(".content"); // หา <div class="content"> ที่ใกล้ที่สุด
            content.classList.toggle("show"); // เพิ่มหรือลบ class "show" เพื่อแสดงหรือซ่อน
        });

        menuContainer.appendChild(button);
    });

    console.log("Menu buttons created ✅");
});



