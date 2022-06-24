bsOffcanvas = null

function toggleOffcanvas() {

    bsOffcanvas = new bootstrap.Offcanvas('#offcanvasCollapseMenu');
    bsOffcanvas.toggle();

}

function jumpTo(anchor){
    window.location.href = "#"+anchor;
}