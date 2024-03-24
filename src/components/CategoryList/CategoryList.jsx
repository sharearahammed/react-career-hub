import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const CategoryList = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            
            <h2 className="text-5xl text-center font-bold mb-[16px]">Job Category List</h2>
            <p className="text-center text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className="mt-[32px] flex justify-between gap-5">
                {
                    categories.map(categories => <Category key={categories.id}
                        categories={categories}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;