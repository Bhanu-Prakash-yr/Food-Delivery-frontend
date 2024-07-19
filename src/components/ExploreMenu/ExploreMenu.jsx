import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h1>Explore Our Menu</h1>
        <p className='ExploreMenu-text'>Choose from the diverese menu featuring the delectable array of dishes.Our Mission is to satisfy your cravings and elevate your dining Experience and Make you feel blessed with our servings</p>
        <div className="ExploreMenu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index}className="Exploremenu-list-item">
                            <img  className={category==item.menu_name?"active":""} src={item.menu_image}  />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
