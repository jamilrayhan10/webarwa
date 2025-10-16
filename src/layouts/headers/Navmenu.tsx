import menu_data from "@/data/menu-data";
import Link from "next/link";

interface NavmenuProps {
  menu_style?: boolean;
}


export default function Navmenu({ menu_style = false }: NavmenuProps) {
  return (
    <ul>
      {menu_data.map((item, i) => (
        <li key={i} className={`${item.has_submenu ? "menu-item-has-children" : ""}`}>
          <Link href={item.path} className={`${menu_style ? "light-color" : ""}`}>{item.title}</Link>
          {/* {item.has_submenu &&
            <ul className="sub-menu">
              {item.sub_menus?.map((sub_item, index) => (
                <li key={index}>
                  <Link className="no-border" href={sub_item.path}>{sub_item.title}</Link> 
                </li>
              ))}
            </ul>
          } */}
        </li>
      ))}
    </ul>
  )
}
