

// 简单的交互效果
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.header-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            if (this.querySelector('.fa-search')) {
                alert('搜索功能');
            } else if (this.querySelector('.fa-ellipsis-v')) {
                alert('菜单功能');
            }
        });
    });

    // 卡片点击效果
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});