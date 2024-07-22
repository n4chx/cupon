var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");

cpnBtn.onclick = function(){
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML ="COPIED";
    setTimeout(function(){
        cpnBtn.innerHTML="COPY CODE";
    }, 3000);
}

/*function redeemCoupon() {
    alert('¡Cupón canjeado!');
}

/*slide in*/
document.addEventListener('DOMContentLoaded', () => {
    const coupons = document.querySelectorAll('.coupon-card');
    coupons.forEach((coupon, index) => {
        coupon.style.animationDelay = `${index * 0.1}s`;
        coupon.style.animation = 'slideIn 1.4s forwards';
    });
});

function redeemCoupon(button) {
    var couponCard = button.closest('.coupon-card');
    couponCard.classList.add('redeemed');
    button.innerHTML = 'CANJEADO';
    button.setAttribute('disabled', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
    const coupons = document.querySelectorAll('.coupon-card');

    // Cargar estado de cupones canjeados de localStorage
    coupons.forEach(coupon => {
        const couponId = coupon.getAttribute('data-id');
        const redeemed = localStorage.getItem(`coupon_${couponId}`);

        if (redeemed === 'true') {
            coupon.classList.add('redeemed');
            coupon.querySelector('.btn-cnj').innerHTML = 'CANJEADO';
            coupon.querySelector('.btn-cnj').setAttribute('disabled', 'true');
        }
    });
});

function redeemCoupon(button) {
    var couponCard = button.closest('.coupon-card');
    var couponId = couponCard.getAttribute('data-id');

    couponCard.classList.add('redeemed');
    button.innerHTML = 'CANJEADO';
    button.setAttribute('disabled', 'true');

    // Guardar estado de cupón canjeado en localStorage
    localStorage.setItem(`coupon_${couponId}`, 'true');
}

function navigateToBirthdayPage() {
    window.location.href = '../fc/index.html';
}

