import { FilterCategories } from "../../Constants/General";
import { getUniqueItems } from "../../Helpers/General";
import { KeysGroup } from "../../Constants/General";
import "./Sidebar.scss";

const Sidebar =({data}) => {

    return (
        <div>
            {FilterCategories.map((category) => {
                return (
                    <div className="MainList">
                        <span style={{marginBottom: '5px'}}>{category}</span>
                        <section className="ListItems">
                        {(() => {
                            const values = getUniqueItems(category,data).sort();
                            switch(category) {
                                case 'Brand' : {
                                    return (
                                        <>
                                        {values.map((item) => {
                                            return (
                                                <label className="Item">
                                                    <input type="checkbox" style={{marginRight : '5px'}}/>
                                                    {item}
                                                </label>
                                            )
                                        })}
                                        </>
                                    )
                                }
                                case 'Discount':
                                case 'Price' : {
                                    return (
                                        <div>
                                            <span style={{display:'flex', justifyContent: 'space-between', width:'8rem'}}>
                                                <label>
                                                    {values[0]}
                                                </label>
                                                <label>
                                                    {values[values.length-1]}
                                                </label>
                                            </span>
                                            <input type="range" value={values[1]} min={Math.min(...values)} max={Math.max(...values)}/>
                                        </div>
                                    )
                                }
                                case 'Count' : 
                                case 'Rating' : {
                                    return (
                                        <>
                                        {KeysGroup[category.toLocaleLowerCase()].map((item)=>{
                                            return (
                                                <label>
                                                    <input type="checkbox"/> 
                                                    <span style={{marginLeft: '5px'}}>{item}</span>
                                                </label>
                                            )
                                        })}
                                        </>
                                    )
                                }
                                default : {
                                    return (<></>)
                                }
                            }
                        })()}
                        
                        </section>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;