function DesctopSidebar() {
    if (document.documentElement.clientWidth > 991) {
        document.getElementById('bg-list-group-item').style.display = 'none';
        document.getElementById('CameraPhoto').checked = false;
        document.getElementById('HomeCinemaTvVideo').checked = false;
        document.getElementById('MobilePhones').checked = false;
        document.getElementById('ComputersComponents').checked = false;
        

    }
};