function MobileSidebarOnClickHomeCinemaTvVideo() {
    if (document.documentElement.clientWidth < 992) {
        document.getElementById('mobile-menu').checked = true;
        document.getElementById('HomeCinemaTvVideoMobile').checked = true;
    }
}