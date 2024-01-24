import menus from '../data/menu-datails.json';

//json형식으로 메뉴 전체를 반환
export function getMenuList (){
    return menus;
}

//menudatails에서 넘겨준 메뉴코드 값과 일치하는 메뉴 객체를 반환
export function getMenuDetail(menuCode){
    //사용자가 요청한 메뉴 코드와 일치하는 메뉴를 반환함
    return menus.filter(menu => menu.menuCode === parseInt(menuCode));
}

export function searchMenu(menuName){
    return menus.filter(menu=> menu.menuName.match(menuName));
}