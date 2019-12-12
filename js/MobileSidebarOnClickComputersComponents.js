function MobileSidebarOnClickComputersComponents() {
    if (document.documentElement.clientWidth < 992) {
        document.getElementById('mobile-menu').checked = true;
        document.getElementById('ComputersComponentsMobile').checked = true;
    }
}