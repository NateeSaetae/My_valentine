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

    let topics = document.querySelectorAll(".content h3");
    let menuContainer = document.getElementById("menu-container");
    let contents = document.querySelectorAll(".content");

    // วนลูปสร้างปุ่มตามจำนวน <h3>
    topics.forEach((topic, index) => {
        let button = document.createElement("button");
        button.classList.add("menu-button");

        // ค้นหาไอคอนใน <h3> และใช้แทนข้อความ
        let icon = topic.querySelector("i");
        if (icon) {
            button.innerHTML = `<i class="${icon.classList}"></i>`; // ใช้ไอคอนจาก h3
        } else {
            button.innerHTML = `<i class="fa-solid fa-circle-question"></i>`; // ไอคอนสำรอง ถ้าไม่มี
        }

        // เมื่อกดปุ่ม
        button.addEventListener("click", function () {
            // ซ่อนเนื้อหาทั้งหมดก่อน
            contents.forEach(content => content.classList.remove("active"));

            // แสดงเฉพาะเนื้อหาของปุ่มที่กด
            let content = topic.closest(".content");
            content.classList.add("active");
        });

        menuContainer.appendChild(button);
    });

    console.log("Menu buttons created ✅");
});

function createFloatingHeart() {
    let heart = document.createElement("i");
    heart.classList.add("fa-solid", "fa-heart", "floating-heart");
    
    // ตั้งค่าตำแหน่งแบบสุ่ม
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    document.body.appendChild(heart);

    // ลบหัวใจเมื่อ Animation จบ
    setTimeout(() => { heart.remove(); }, 3000);
}

// สร้างหัวใจทุกๆ 1 วินาที
setInterval(createFloatingHeart, 1000);






