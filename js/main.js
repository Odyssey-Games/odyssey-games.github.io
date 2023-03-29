function more_info_click(button, game_id) {
    const game_info = document.getElementsByClassName("element-more-info-" + game_id)[0];
    const arrow_icon = button.getElementsByTagName("img")[0];
    game_info.classList.toggle("hidden");
    arrow_icon.classList.toggle("collapsed");
}